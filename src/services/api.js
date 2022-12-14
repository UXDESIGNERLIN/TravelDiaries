import axios from 'axios'

export const baseUrl = 'https://uxdesignerlin-gifts.herokuapp.com'
export const GET_DIARIES_ENDPOINT = `${baseUrl}/diaries`
export const POST_DIARIES_ENDPOINT = `${baseUrl}/diaries`
export const DELETE_DIARY_BY_ID = (id) => `${baseUrl}/diaries/${id}`
export const GET_DIARY_BY_ID = (id) => `${baseUrl}/diaries/${id}`

export function getDiaries () {
  return axios.get(GET_DIARIES_ENDPOINT)
}

export function postDiary (diary) {
  return axios.post(POST_DIARIES_ENDPOINT, diary)
}

export function deleteDiaryById (id) {
  return axios.delete(DELETE_DIARY_BY_ID(id))
}

export function getDiaryById (id) {
  return axios.get(GET_DIARY_BY_ID(id))
}
