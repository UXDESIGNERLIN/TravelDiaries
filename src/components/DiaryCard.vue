<template>
<div class="DiaryCard">
  <div class="DiaryCard__title">
    <img :src="card.imgurl" width="100" height="100"/>
    <button @click.prevent="deleteDiary">X</button>
    <h2>{{card.title}}</h2>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import router from '@/router'
export default {
  name: 'DiaryCard',
  props: {
    card: Object
  },
  setup (props) {
    const store = useStore()
    const deletDiary = () => {
      store.dispatch('deleteDiary', props.card.id).catch((error) => {
        router.push({
          name: 'ErrorPage',
          params: { error: error }
        })
      })
    }
    return { deletDiary }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.DiaryCard {
  &__title {
    margin: 0 10px;
  }
  button {
    float: right;
  }
  h2 {
    width: 90%;
    font-size: 1rem;
    @include in-the-middle;
    @include truncate;
  }
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border: 1px solid $theme-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: 1rem;
  position: relative;
  cursor: pointer;
}
</style>
