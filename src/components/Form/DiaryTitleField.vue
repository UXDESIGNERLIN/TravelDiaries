<template>
 <div>
    <input class="FormFields" type="text" placeholder="Diary Title"  v-model.trim="title" @input="$emit('update:modelValue', $event.target.value)" @keyup="validateInput" @blur="validateInput"/>
    <div class="error-field" v-if="errors.title">
      {{ errors.title }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import formValidators from '@/utils/formValidators'
export default {
  name: 'DiaryTitleField',
  emits: ['update:modelValue'],
  setup () {
    const title = ref('')
    const { validateTitle, errors } = formValidators()
    const validateInput = () => {
      validateTitle('title', title.value)
    }
    return { title, errors, validateInput }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
input {
  @include full-width-full-height;
}

</style>
