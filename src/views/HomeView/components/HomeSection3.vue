<script lang="ts" setup>
import { imgUrl } from '@/assets'
import { useMobileStore } from '@/stores/isMobile'
const store = useMobileStore()

const contentList = [
  {
    title: '內部創業',
    icon: imgUrl('home/section3/icon1.png'),
    contentText:
      '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。',
  },
  {
    title: '快樂樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。',
  },
  {
    title: '激動驅動',
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。',
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      '我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法。',
  },
]
const landPic = imgUrl('home/section3/landPic.png')
</script>

<template>
  <div class="bg-gray-100 text-gray-900">
    
    <div v-if="!store.isMobile" class="mx-auto px-40 py-5">
      <!-- Title and Description -->
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-4xl font-bold">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">
          新媒體天地的核心是深度結合的多元文化 DNA，為客戶帶來的是創意與新鮮感。
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="flex justify-items-center">
        <!-- Image and text -->
        <div class="mr-15 flex justify-items-end">
          <img class="max-h-[810px] overflow-hidden rounded-4 shadow-lg" :src="landPic" alt="Image Description">
        </div>

        <!-- Icons and Text -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="item in contentList"
            :key="item.title"
            class="flex flex-col items-center justify-center"
          >
            <div class="mb-2 rounded-full p-4 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="text-lg">{{ item.title }}</p>
            <p class="text-center text-xs text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="store.isMobile" class="mx-auto p-5">
      <!-- Title and Description -->
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-4xl font-bold">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">新媒體天地的核心是深度結合的多元文化 DNA，為客戶帶來的是創意與新鮮感。</p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="flex justify-center">
        <!-- Image and text -->

        <!-- Icons and Text -->
        <div class="flex flex-col">
          <div class="flex justify-center">
          <img class="overflow-hidden rounded-4 shadow-lg lg:max-h-[408px] lg:max-w-[611px]" :src="landPic" alt="Image Description">
        </div>
          <div v-for="item in contentList" :key="item.title" class="flex flex-col items-center justify-center px-8">
            <div class="mb-2 rounded-full p-4 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="text-lg">{{ item.title }}</p>
            <p class="text-center text-xs text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
