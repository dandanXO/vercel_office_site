<script setup lang="ts">
import IconEarth from '@icons/nd/earth.svg'
import { imgUrl } from '@/assets'
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
  <main></main>
</template>
