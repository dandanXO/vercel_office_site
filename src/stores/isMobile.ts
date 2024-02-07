import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMobileStore = defineStore('isMobile', () => {
  let isMobile = false;
  if(screen.width <= 800){
    isMobile =  true
  }else{
    isMobile =  false
  }

  return { isMobile }
})
