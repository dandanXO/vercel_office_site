<script setup lang="ts">
import { imgUrl } from '@/assets'

import HomeSection1 from './HomeView/components/HomeSection1.vue'
import HomeSection3 from './HomeView/components/HomeSection3.vue'
</script>

<template>
  <div>
    <HomeSection1 />
    <!-- Section 2 -->
    <div class="relative mt-87px bg-neutral-07 py-150px">
      <img class="absolute bottom-0 left-0" :src="imgUrl('home/2-bg-1.png')" />
      <img class="absolute right-0 top-0" :src="imgUrl('home/2-bg-2.png')" />
      <div class="relative z-1 hidden text-center text-40px text-white font-700 xl:block">
        定義全新的企業數字 DNA
      </div>
      <div class="relative z-1 flex flex-wrap justify-between gap-60px xl:mt-80px xl:gap-0">
        <div
          class="w-full text-center xl:w-1/3"
          v-for="(item, index) in [
            { num: '5', sub: '國家' },
            { num: '100+', sub: '客戶' },
            { num: '300+', sub: '員工' },
          ]"
          :key="index"
        >
          <div class="text-50px text-primary font-800 font-mulish">{{ item.num }}</div>
          <div class="mt-16px text-20px text-neutral-04 font-400 font-mulish">{{ item.sub }}</div>
        </div>
      </div>
    </div>
    <!-- Section 3 -->
    <HomeSection3 />
  </div>
</template>

<style lang="scss" scoped></style>
