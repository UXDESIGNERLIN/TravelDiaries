<template>
<div class="DiaryImage">
  <ul>
    <ImageCheckbox v-for="(imgurl, index) in checkboxes" :imgurl="imgurl" :key="index"/>
  </ul>
</div>
</template>

<script>
import ImageCheckbox from '@/components/ImageCheckbox'

export default {
  name: 'DiaryImage',
  components: {
    ImageCheckbox
  },
  setup () {
    const checkboxes = [
      'https://www.w3schools.com/css/img_fjords.jpg',
      'https://www.w3schools.com/css/img_fjords.jpg',
      'https://www.w3schools.com/css/img_fjords.jpg',
      'https://www.w3schools.com/css/img_fjords.jpg'
    ]
    return { checkboxes }
  }
}
</script>
<style lang="scss" scoped>
.DiaryImage {
  ul {
    list-style-type: none;
  }
}
</style>
