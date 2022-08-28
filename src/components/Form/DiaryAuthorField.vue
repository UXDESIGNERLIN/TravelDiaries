<template>
 <div>
    <input class="FormFields" type="text" placeholder="Diary Author"  v-model.trim="author" @input="$emit('update:modelValue', $event.target.value)" @keyup="validateInput" @blur="validateInput"/>
    <div class="error-field" v-if="errors.author">
      {{ errors.author }}
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
    const author = ref('')
    const { validateAuthor, errors } = formValidators()
    const validateInput = () => {
      validateAuthor('author', author.value)
    }
    return { author, errors, validateInput }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
input {
  @include full-width-full-height;
}

</style>
