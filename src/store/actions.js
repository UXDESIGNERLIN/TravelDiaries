import { getDiaries, postDiary, getDiaryById, deleteDiaryById } from '@/services/api'

export default {
  getDiaries ({ commit }) {
    return getDiaries()
      .then((response) => {
        commit('SET_DIARIES', response.data)
      })
      .catch(error => {
        throw (error)
      })
  },
  postDiary ({ commit }, diary) {
    return postDiary(diary).then(() => {
      commit('POST_DIARY', diary)
    }).catch(error => {
      throw (error)
    })
  },
  deleteDiary ({ commit }, diaryId) {
    return deleteDiaryById(diaryId).then(() => {
      commit('DELETE_DIARY', diaryId)
    }).catch(error => {
      throw (error)
    })
  },
  getDiaryById ({ commit }, diaryId) {
    return getDiaryById(diaryId).then((response) => {
      commit('GET_DIARY', response.data)
    }).catch(error => {
      throw (error)
    })
  }
}
