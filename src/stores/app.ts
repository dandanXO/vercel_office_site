import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawerOpen = ref(false)

  return { drawerOpen }
})
