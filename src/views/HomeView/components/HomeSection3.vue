<script lang="ts" setup>
import { imgUrl } from '@/assets'
import { useMobileStore } from '@/stores/isMobile'
const store = useMobileStore()
const section3Ref = ref(null)



import { onMounted } from "vue";
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

const contentList = [
  {
    title: '內部創業',
    icon: imgUrl('home/section3/icon1.png'),
    contentText:
      'Internal entrepreneurship',
    class: 'm-t-50'
  },
  {
    title: '快樂樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      'Gaming enjoyment',
    class: 'm-b-50'
  },
  {
    title: '激動驅動',
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      'Incentive-driven',
    class: 'm-t-30'
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      'Rapid iteration',
    class: 'm-b-30'
  },
]
const Vector = imgUrl('home/section3/Vector.svg')
</script>

<template>
  <div class="bg-primary-bg text-gray-900">
    
    <div v-if="!store.isMobile" class="mx-auto px-20 py-10">
      <!-- Title and Description -->
      <div class="mb-10 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-2 text-4xl font-bold">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">
          新數字致力於為客戶定義全新的企業數字 DNA，為客戶在原有的賽道創造新藍海
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="flex justify-items-center">
        <!-- Icons and Text -->
        <div class="w-full flex flex-row" ref="section3Ref">
          <div
            v-for="item in contentList"
            data-aos="fade-up"
            data-aos-duration="2000"
            :key="item.title"
            :class="['w-1/4 flex flex-col items-center justify-center text-2xl', item.class]"
          >
            <div class="mb-2 rounded-full p-4 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="text-lg">{{ item.title }}</p>
            <p class="text-center text-lg text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-in-bottom{
  -webkit-animation: fade-in-bottom 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>
