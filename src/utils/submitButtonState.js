
import { computed } from 'vue'

export default function submitButtonState (diary) {
  const isSubmitDisabled = computed(() => {
    let disabled = true
    for (const prop in diary) {
      if (diary[prop] === null || diary[prop] === '') {
        disabled = true
        break
      }
      disabled = false
    }
    return disabled
  })
  return { isSubmitDisabled }
}
