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
        :class="[`w-${card.id%1}`, `h-${card.id%4}`]"
      >
        <DiaryCard :card="card"/>
      </router-link>
    </div>
    <div class="Home__buttonContainer">
      <button class="Home__add" @click.stop.prevent="openModal">ADD</button>
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
    @include relative-center
  }
  .Home {
    &__buttonContainer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      button {
        margin: 1rem auto;
        border: none;
        color: $theme-color-third;
        font-weight: 900;
      }
    }
    &__DiaryCardContainer {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 100px 300px;
      grid-gap: 10px;
      grid-auto-flow: dense;
    }
  }

  @media (min-width: 768px) {
    .Home {
      &__DiaryCardContainer {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media (min-width: 1024px) {
    .Home {
      &__DiaryCardContainer {
        grid-template-columns: repeat(3, 2fr);
      }
    }
  }

  @for $var from 1 through $grid-sum {
    .w-#{$var} {
      grid-column: span $var;
    }
    .h-#{$var} {
      grid-row: span $var;
    }
  }
</style>
