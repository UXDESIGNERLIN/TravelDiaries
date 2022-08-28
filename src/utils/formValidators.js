import { reactive } from '@vue/reactivity'

const errors = reactive({})
const leastCharactersLength = 11

function isEmpty (fieldName, fieldValue) {
  return !fieldValue ? `The ${fieldName} field is required` : ''
}

function minCharacters (fieldName, fieldValue) {
  return fieldValue.trim().split('').length < 11 ? `The ${fieldName} field needs at least ${leastCharactersLength - 1} characters` : ''
}

export default function formValidators () {
  const validateAuthor = (fieldName, fieldValue) => {
    errors[fieldName] = isEmpty(fieldName, fieldValue)
  }
  const validateDescription = (fieldName, fieldValue) => {
    errors[fieldName] = isEmpty(fieldName, fieldValue)
    if (!errors[fieldName]) {
      errors[fieldName] = minCharacters(fieldName, fieldValue)
    }
  }

  return { errors, validateAuthor, validateDescription }
}
