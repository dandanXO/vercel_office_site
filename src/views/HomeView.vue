<script setup lang="ts">
import { imgUrl } from '@/assets'
import IconEarth from '@icons/nd/earth.svg'
import HomeSection1 from './HomeView/components/HomeSection1.vue'

const logoWhite = imgUrl('logo-white.svg')
const mainNav = [
  { name: '關於新數字', to: '/' },
  { name: '產品', to: '/product' },
  { name: '人才招募', to: '/career' },
  { name: '聯絡我們', to: '/contact' },
]
</script>

<template>
  <header class="h-88px flex items-center container">
    <img :src="logoWhite" class="h-64px w-64px" />
    <div class="flex flex-1 items-center justify-center">
      <router-link
        v-for="item in mainNav"
        :key="item.name"
        :to="item.to"
        class="px-5 py-3 text-base text-black font-500 decoration-none"
        >{{ item.name }}</router-link
      >
    </div>
    <div>
      <IconEarth class="text-black hover:cursor-pointer"></IconEarth>
    </div>
  </header>
  <main>
    <HomeSection1 />
    <!-- Section 2 -->
    <div class="bg-neutral-07 relative mt-87px py-150px">
      <!-- <div
        class="absolute bottom-0 left-0"
        :style="{ backgroundImage: `url(${imgUrl('home/2-bg-1.png')})` }"
      ></div> -->
      <img class="absolute bottom-0 left-0" :src="imgUrl('home/2-bg-1.png')" />
      <img class="absolute right-0 top-0" :src="imgUrl('home/2-bg-2.png')" />
      <div class="relative z-1 text-center text-40px text-white font-700">
        定義全新的企業數字 DNA
      </div>
      <div class="relative z-1 mt-80px flex justify-between">
        <div
          class="w-1/3 text-center"
          v-for="(item, index) in [
            { num: '5', sub: '國家' },
            { num: '100+', sub: '客戶' },
            { num: '300+', sub: '員工' },
          ]"
          :key="index"
        >
          <div class="font-mulish text-50px text-primary font-800">{{ item.num }}</div>
          <div class="font-mulish mt-16px text-20px text-white font-400">{{ item.sub }}</div>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<style lang="scss" scoped></style>
