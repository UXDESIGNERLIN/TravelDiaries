<template>
  <div class="Home">
     <teleport to='#modal-area' v-if="showModal" >
      <Modal @close="closeModal" :showModal="showModal"/>
    </teleport>
    <div class="Home__DiaryCardContainer">
      <router-link
        :to="{ name: 'DiaryDetail', params: { id: card.id } }"
        v-for="card in diaries"
        :key="card.id"
      >
        <DiaryCard :card="card"/>
      </router-link>
    </div>
    <div class="Home__add" @click="openModal"><p>+</p></div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Modal from '@/components/Modal'
import DiaryCard from '@/components/DiaryCard'
import router from '@/router'

export default {
  name: 'Home',
  components: {
    Modal,
    DiaryCard
  },
  setup () {
    const store = useStore()
    const showModal = ref(false)
    const diaries = computed(() => store.state.diaries)
    const closeModal = () => {
      showModal.value = false
    }
    const openModal = () => {
      showModal.value = true
    }
    onMounted(() => {
      store.dispatch('getDiaries').catch((error) => {
        router.push({
          name: 'ErrorPage',
          params: { error: error }
        })
      })
    })
    return { diaries, showModal, openModal, closeModal }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
  .modal-content {
    @include in-the-middle
  }
  .Home {
    display: flex;
    flex-direction: column;
    div {
      margin: 30px;
    }
    &__add {
      position: fixed;
      bottom: 15px;
      width: 50px;
      height: 50px;
      align-self: center;
      border: 1px solid $theme-color;
      border-radius: $round-border-radius;
      box-shadow: $box-shadow;
      cursor: pointer;
    }
    &__DiaryCardContainer {
      max-height: 350px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: auto;
    }
  }
</style>
