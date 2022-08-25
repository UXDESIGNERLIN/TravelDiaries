<template>
  <div class="DiaryDetail">
    <div class="DiaryDetail__title">
      <h2>{{diaryDetail.title}}</h2>
    </div>
    <div>
      <div class="DiaryDetail__container">
        <h4>
          {{diaryDetail.body}}
        </h4>
         <h4>{{diaryDetail.price}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import router from '@/router'

export default {
  name: 'DiaryDetail',
  props: {
    id: String
  },
  setup (props) {
    const store = useStore()
    const diaryDetail = computed(() => store.state.diaryDetail)
    onMounted(() => {
      store.dispatch('getDiaryById', props.id).catch((error) => {
        router.push({
          name: 'ErrorPage',
          params: { error: error }
        })
      })
    })
    return { diaryDetail }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.DiaryDetail {
  @include in-the-middle;
  border: 1px solid $theme-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: auto;
  width: 50%;
  height: 50%;
  padding: 15px;
  &__title {
    @include truncate
  }
  &__container {
    display:flex;
    height: 200px;
    flex-direction: column;
    text-align: left;
  }
}
</style>
