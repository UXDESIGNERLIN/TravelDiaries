<template>
  <div class="Modal">
    <button @click="close" type="button">X</button>
    <form class="Modal__form" novalidate @submit.prevent>
      <button type="submit" :disabled="isSubmitDisabled" @click.prevent="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
import submitButtonState from '@/utils/submitButtonState'
import { v4 } from 'uuid'
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Modal',
  emits: ['close'],
  setup (props, { emit }) {
    const store = useStore()
    const diary = ref({
      id: v4(),
      title: '',
      description: '',
      author: 'hey',
      imgurl: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/tomato.jpg'
    })
    const close = () => {
      emit('close')
    }
    const { isSubmitDisabled } = submitButtonState(diary.value)
    const onSubmit = () => {
      store.dispatch('postDiary', diary.value).catch((error) => {
        console.log(error)
      })
      close()
    }
    return { diary, close, onSubmit, isSubmitDisabled }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.Modal {
  width: 50%;
  height: 50%;
  display: flex;
  position: fixed;
  justify-content: flex-end;
  @include in-the-middle;
  background-color: rgba(0,0,0,0.9);
  overflow: auto;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    @include in-the-middle;
  }
  &__form > div {
    padding: 10px;
    margin: 10px;
  }
  button {
    padding: 10px;
    margin: 10px;
    @include dark;
  }

  button[type="button"] {
    height:10%;
    width: 10%;
  }
}
</style>
