export default {
    POST_DIARIES (state, diary) {
      state.diaries = [...state.diaries, diary]
    },
    SET_DIARIES (state, diaries) {
      state.diaries = diaries
    },
    DELETE_DIARY (state, dairyId) {
      const index = state.diaries.findIndex(diary => dairy.id === dairyId)
      if (index !== -1) {
        state.diaries = [...state.diaries.slice(0, index), ...state.diaries.slice(index + 1)]
      }
    },
    GET_DIARY (state, diary) {
      state.diaryDetail = diary
    }
  }
  