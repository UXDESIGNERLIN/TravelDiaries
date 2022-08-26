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
    <div class="Home__buttonContainer">
      <button>Home</button>
      <button class="Home__add" @click="openModal">Add</button>
    </div>
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
    &__buttonContainer {
      margin: 30px;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: white;
      text-align: center;
      display: flex;
      justify-content: center;
      button {
        border: none;
      }
    }
    &__DiaryCardContainer {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: 100px 300px;
      grid-gap: 10px;
    }
  }
</style>
