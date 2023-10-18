import { ref } from 'vue'
import { defineStore } from 'pinia'



export const portfolioState = defineStore('portfolioState', () => {
  const isActive = ref(false);

  function toggleActive() {
    isActive.value = !isActive.value
  }



  return {
    isActive,
    toggleActive,

  }
})
