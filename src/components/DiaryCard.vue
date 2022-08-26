<template>
  <div class="DiaryCard__container">
    <div class="DiaryCard__container__img">
      <img :src="card.imgurl" :alt="card.title"/>
    </div>
    <div class="DiaryCard__container__info">
      <p>{{card.title}}</p>
      <p class="DiaryCard__container__info__description">{{card.description}}</p>
      <button @click.stop.prevent="deleteDiary">Remove</button>
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
        display:inline-block;
        @include fullWidthfullHeight;
      }
    }
    &__info {
      max-height: 200px;
      @include in-the-middle;
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
        color: $theme-color-secondary;
        border: none;
        z-index: 10;
      }
    }
    &:hover::after {
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: rgba(0,0,0,0.5);
    @include in-the-middle;
  }
  }
}
</style>
