<template>
  <v-btn
    v-if="isVisible"
    class="scroll-to-top"
    color="primary"
    icon="mdi-arrow-up"
    @click="scrollToTop"
  />
</template>

<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const isVisible = ref(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleButton = () => {
    isVisible.value = window.scrollY > 300 // Show button after scrolling down 300px
  }

  onMounted(() => {
    window.addEventListener('scroll', toggleButton)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', toggleButton)
  })
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
}
</style>
