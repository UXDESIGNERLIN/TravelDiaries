<template>
  <div class="DiaryDetail">
    <img :src="diaryDetail.imgurl" :alt="diaryDetail.title">
    <div>
      <h1>{{diaryDetail.title}}</h1>
      <p>{{diaryDetail.description}}</p>
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
    display: grid;
    grid-gap: 3rem;
  img {
    object-fit: cover;
    object-position: 50% 50%;
    @include full-width-full-height;
  }
  p, h1 {
    text-align: left;
    font-family: "Playfair Display", sans-serif;
  }
}

@media (min-width: 768px) {
  .DiaryDetail {
    grid-template-columns: 1fr 3fr;
  }
}

@media (min-width: 1024px) {
  .DiaryDetail {
    grid-template-columns: 1fr 1fr;
    margin: 20px;
  }
}
</style>
