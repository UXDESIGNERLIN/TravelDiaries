<template>
  <div class="DiaryCard__container">
    <div class="DiaryCard__container__img">
      <img :src="card.imgurl" :alt="card.title"/>
    </div>
    <p class="text">{{card.title}}</p>
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
    const deleteDiary = () => {
      store.dispatch('deleteDiary', props.card.id).catch((error) => {
        router.push({
          name: 'ErrorPage',
          params: { error: error }
        })
      })
    }
    return { deleteDiary }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.DiaryCard {
  &__container {
    position: relative;
    @include fullWidthfullHeight;
    &__img {
      overflow: hidden;
      @include fullWidthfullHeight;
      img {
        object-fit: cover;
        object-position: 50% 50%;
        transition: .5s ease-in-out;
        @include fullWidthfullHeight;
      }

    }
    .text {
      width: 90%;
      font-size: 1rem;
      opacity: 0;
      color: $theme-color-secondary;
      z-index: 4;
      @include in-the-middle;
      @include truncate;
    }
    &:hover img{
      transform: scale(1.5);
    }
    &:hover .text{
      opacity: 1;
    }
  }
}
</style>
