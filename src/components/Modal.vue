<template>
  <div class="Modal">
    <button @click="close" type="button"><span>X</span></button>
    <form class="Modal__form" novalidate @submit.prevent>
      <DiaryTitleField v-model="diary.title"/>
      <DiaryDescriptionField v-model="diary.description"/>
      <button type="submit" :disabled="isSubmitDisabled" @click.prevent="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
import submitButtonState from '@/utils/submitButtonState'
import { v4 } from 'uuid'
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import DiaryTitleField from '@/components/Form/DiaryTitleField'
import DiaryDescriptionField from '@/components/Form/DiaryDescriptionField'

export default {
  name: 'Modal',
  components: {
    DiaryTitleField,
    DiaryDescriptionField
  },
  emits: ['close'],
  setup (props, { emit }) {
    const defaultImgurl = 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGlmZXx8fHx8fDE2NjE2MjA4NDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'
    const store = useStore()
    const diary = ref({
      id: v4(),
      title: '',
      description: '',
      imgurl: defaultImgurl
    })
    const { isSubmitDisabled } = submitButtonState(diary.value)
    const close = () => {
      emit('close')
    }
    const onSubmit = () => {
      store.dispatch('postDiary', diary.value).catch((error) => {
        router.push({
          name: 'ErrorPage',
          params: { error: error }
        })
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
  height: 30%;
  display: flex;
  position: fixed;
  justify-content: flex-end;
  @include fixed-center;
  background-color: rgba(0,0,0,0.9);
  overflow: auto;
  max-width: 600px;
  &__form {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    @include relative-center;
    @include full-width-full-height;
  }
  &__form > div {
    padding: 10px;
    margin: 10px;
  }
  button {
    padding: 10px;
    margin: 10px;
    line-height: 50%;
    @include dark;
  }

  button[type="button"] {
    max-height: 15px;
    max-width: 30px;;
    width: 10%;
    z-index: 10;
  }
}

@media (min-width: 768px) {
}
</style>
