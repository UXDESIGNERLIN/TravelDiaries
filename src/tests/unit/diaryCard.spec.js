/* global spyOn */

import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import store from '@/store'
import router from '@/router'
import DiaryCard from '@/components/DiaryCard'
import { MOCK_DIARY_CARD } from '../fixtures/card.fixtures.spec'

describe('DiaryCard', () => {
  it('should render the data successfully', async () => {
    const wrapper = mount(DiaryCard, {
      global: {
        plugins: [store, router]
      },
      props: {
        key: MOCK_DIARY_CARD.id,
        card: MOCK_DIARY_CARD
      }
    })

    const wrapperHtml = wrapper.html()

    expect(wrapperHtml).toContain(MOCK_DIARY_CARD.title)
  })

  describe('Delete card behavior', () => {
    it('should remove the diary when user click x buton', async () => {
      const mockStore = createStore({
        actions: {
          deleteDiary: jest.fn()
        }
      })
      const wrapper = mount(DiaryCard, {
        global: {
          plugins: [mockStore, router]
        },
        mocks: {
          $store: mockStore
        },
        props: {
          card: MOCK_DIARY_CARD
        }
      })
      spyOn(mockStore, 'dispatch').and.callThrough()

      await wrapper.find('button').trigger('click')

      expect(mockStore.dispatch).toBeCalledWith('deleteDiary', MOCK_DIARY_CARD.id)
    })

    it('should rout to error page if there is the error', async () => {
      const mockStore = createStore({
        actions: {
          deleteDiary: jest.fn()
        }
      })
      const wrapper = mount(DiaryCard, {
        global: {
          plugins: [mockStore, router],
          mocks: {
            store: mockStore
          }
        },
        props: {
          card: MOCK_DIARY_CARD
        }
      })
      spyOn(mockStore, 'dispatch').and.returnValue(
        Promise.reject({ error: 'error' })
      )
      spyOn(router, 'push')

      await wrapper.find('button').trigger('click')

      expect(router.push).toBeCalledWith({
        name: 'ErrorPage',
        params: { error: { error: 'error' } }
      })
    })
  })
})
