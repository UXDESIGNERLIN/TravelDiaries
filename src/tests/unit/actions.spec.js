import actions from '@/store/actions'
import { MOCK_DIARY_CARD } from '../fixtures/card.fixtures.spec'
import { GET_DIARIES_ENDPOINT, DELETE_DIARY_BY_ID } from '@/services/api'

let url = ''
let mockError = false

jest.mock('axios', () => ({
  get: (_url) => {
    return new Promise((resolve) => {
      url = _url
      if (mockError) { throw Error() }
      resolve({
        data: [
          { ...MOCK_DIARY_CARD }
        ]
      })
    })
  },
  delete: (_url) => {
    return new Promise((resolve) => {
      url = _url
      if (mockError) { throw Error() }
      resolve()
    })
  }
}))

describe('Actions', () => {
  describe('getDiaries', () => {
    it('should get diaries', async () => {
      const commit = jest.fn()

      await actions.getDiaries({ commit })

      expect(url).toBe(GET_DIARIES_ENDPOINT)
      expect(commit).toHaveBeenCalledWith(
        'SET_DIARIES', [{ ...MOCK_DIARY_CARD, id: MOCK_DIARY_CARD.id }]
      )
    })

    it('should throw erros if there is error', async () => {
      mockError = true
      const commit = jest.fn()

      await expect(actions.getDiaries({ commit })).rejects.toThrow()
    })
  })

  describe('deleteDiary', () => {
    it('should delete diary with provided id', async () => {
      mockError = false
      const commit = jest.fn()

      await actions.deleteDiary({ commit }, 3)

      expect(url).toBe(DELETE_DIARY_BY_ID(3))
      expect(commit).toHaveBeenCalledWith(
        'DELETE_DIARY', 3
      )
    })

    it('should throw erros if there is error', async () => {
      mockError = true
      const commit = jest.fn()

      await expect(actions.deleteDiary({ commit }, 3)).rejects.toThrow()
    })
  })
})
