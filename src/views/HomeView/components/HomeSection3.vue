<script lang="ts" setup>
import { imgUrl } from '@/assets'
const contentist = [
  {
    title: '內部創業',
    icon: imgUrl('home/section3/icon1.png'),
    contentText: '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。'
  },
  {
    title: '快樂樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText: '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。'
  },
  {
    title: '激動驅動',
    icon: imgUrl('home/section3/icon3.png'),
    contentText: '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。'
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon4.png'),
    contentText: '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。'
  },
]
const landPic = imgUrl('home/section3/landPic.png')
</script>

<template>
  <div class="bg-gray-100 text-gray-900">

    <div class="max-w-4xl mx-auto p-5">
      <!-- Title and Description -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold mb-2">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">新媒體天地的核心是深度結合的多元文化 DNA，為客戶帶來的是創意與新鮮感。</p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <!-- Image and text -->
        <div class="bg-white rounded overflow-hidden shadow-lg">
          <img class="w-full" :src="landPic" alt="Image Description">
        </div>

        <!-- Icons and Text -->
        <div class="grid grid-cols-2 gap-4">
          <div v-for="item in contentist" :key="item.title" class="flex flex-col items-center justify-center">
            <div class="text-white p-4 rounded-full mb-2">
              <!-- Replace with an SVG or icon font class -->
              <img :scr="item.icon" class="w-[96px] h-[96px]"/>
            </div>
            <p class="text-lg">{{ item.title }}</p>
            <p class="text-xs text-center text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

