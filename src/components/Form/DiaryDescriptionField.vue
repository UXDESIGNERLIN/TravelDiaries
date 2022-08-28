<template>
 <div>
    <textarea maxlength="250" class="FormFields" type="text" placeholder="Diary Description Enter at least 10 characters...."  v-model.trim="description" @input="$emit('update:modelValue', $event.target.value)" @keyup="validateInput" @blur="validateInput"/>
    <div class="error-field" v-if="errors.description">
      {{ errors.description }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import formValidators from '@/utils/formValidators'
export default {
  name: 'DiaryAuthorField',
  emits: ['update:modelValue'],
  setup () {
    const description = ref('')
    const { validateDescription, errors } = formValidators()
    const validateInput = () => {
      validateDescription('description', description.value)
    }
    return { description, errors, validateInput }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
textarea {
  @include full-width-full-height;
  align-items: stretch;
}

@media (min-width: 768px) {
  .DiaryDetail {
    grid-template-columns: 1fr 3fr;
  }
}

</style>
