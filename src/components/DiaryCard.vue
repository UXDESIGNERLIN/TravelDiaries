<template>
  <div class="DiaryCard__container">
    <div class="DiaryCard__container__img">
      <img :src="card.imgurl" :alt="card.title"/>
    </div>
    <div class="DiaryCard__container__info">
      <p>{{card.author}}</p>
      <p>{{card.title}}</p>
      <p class="DiaryCard__container__info__description">{{card.description}}</p>
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
    &__info {
      @include in-the-middle;
      &__description {
        display: none;
      }
      p{
        margin: 0;
        font-size: 1rem;
        color: $theme-color-secondary;
      }
    }
    &:hover img{
      transform: scale(1.5);
    }
    &:hover  &__info{
      overflow: hidden;
      width: 80%;
      height: 50%;
      &__description{
        display: block;
        font-size: 1rem;
        margin: 1rem;
      }
    }
  }
}
</style>
