import { MOCK_DIARY_CARD, MOCK_DIARIES } from '../fixtures/card.fixtures.spec'
import mutations from '@/store/mutations'
import { nextTick } from 'vue'

describe('Mutations', () => {
  it('should have mutation to set diaries to empty diaries array', () => {
    const state = {
      diaries: []
    }

    mutations.SET_DIARIES(state, MOCK_DIARIES)

    expect(state).toEqual({
      diaries: MOCK_DIARIES
    })
  })

  
  it('should have mutation to add diary to diaries array', () => {
    const state = {
      diaries: MOCK_DIARIES
    }

    mutations.POST_DIARY(state, MOCK_DIARY_CARD)

    expect(state.diaries.length).toBe(MOCK_DIARIES.length + 1)
    expect(state.diaries).toContain(MOCK_DIARY_CARD)
  })

  it('should have mutation to remove diary from diaries array', () => {
    const state = {
      diaries: MOCK_DIARIES
    }

    mutations.DELETE_DIARY(state, MOCK_DIARY_CARD.id)

    expect(state.diaries.length).toBe(MOCK_DIARIES.length - 1)
    expect(state.diaries).not.toContain(MOCK_DIARY_CARD)
  })

  it('should have mutation to get diary detail', () => {
    const state = {
      diaryDetail: {}
    }

    mutations.GET_DIARY(state, MOCK_DIARY_CARD)

    expect(state.diaryDetail).toEqual(MOCK_DIARY_CARD)
  })
})
