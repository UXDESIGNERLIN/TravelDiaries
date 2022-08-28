<template>
  <div class="DiaryCard__container">
    <div class="DiaryCard__container__img">
      <img :src="card.imgurl" :alt="card.title"/>
    </div>
    <div class="DiaryCard__container__info">
      <p>{{card.title}}</p>
      <p class="DiaryCard__container__info__description">{{card.description}}</p>
      <button @click.prevent="deleteDiary">Remove</button>
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
    opacity: 0.8;
    @include full-width-full-height;
    &__img {
      overflow: hidden;
      @include full-width-full-height;
      img {
        object-fit: cover;
        object-position: 50% 50%;
        transition: .5s ease-in-out;
        display:inline-block;
        @include full-width-full-height;
      }
    }
    &__info {
      max-height: 200px;
      @include relative-center;
      &__description, button {
        display: none;
      }
      p{
        margin: 0;
        font-size: 1rem;
        color: $theme-color-secondary;
        @include truncate;
      }
    }
    &:hover img{
      transform: scale(1.5);
    }
    &:hover  &__info{
      width: 80%;
      height: 50%;
      &__description {
        display: block;
        height: 30%;
        font-size: 1rem;
        margin: 1rem;
      }
      button {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 50px 0;
        border: none;
        z-index: 10;
      }
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
