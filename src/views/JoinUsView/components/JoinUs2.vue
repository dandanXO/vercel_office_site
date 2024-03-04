<script lang="ts" setup>
import { imgUrl } from '@/assets'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const section3Ref = ref(null)

import { useElementSize } from '@vueuse/core'


import { onMounted } from "vue";
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

const contentList = [
  {
    title: i18n.t('internal_entrepreneurship'),
    icon: imgUrl('home/section3/icon1.png'),
    contentText:
      'Internal entrepreneurship',
    class: 'lg:m-b-40'
  },
  {
    title: i18n.t('gaming_enjoyment'),
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      'Gaming enjoyment',
    class: 'lg:m-b-0'
  },
  {
    title: i18n.t('rapid_iteration'),
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      'Rapid iteration',
    class: 'lg:m-b-40'
  },
  {
    title: i18n.t('incentive_driven'),
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      'Incentive-driven',
    class: 'lg:m-b-0'
  },
]
const Vector = imgUrl('home/section3/Vector.svg')
const bk1 = imgUrl('joinUs/joinus2/block-1.png')
</script>

<template>
  <div class="overflow-hidden bg-primary-bg text-gray-900">
    <div class="relative mx-auto px-6 py-10 lg:px-20" style="padding-bottom: 0">
      <!-- Title and Description -->
      <div class="absolute left-0 top-0 z-0 h-full w-full bg-left-bottom bg-no-repeat" :style="'background-image: url('+bk1+')'" style="background-size: 100%"></div>
      <div class="mb-3 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="z-2 mb-5 text-4xl font-bold">{{ $t('our_culture')  }}</h1>
        <p class="z-2 mb-3 whitespace-pre text-xl text-neutral-06">
          {{ $t('our_culture_caption')  }}
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="flex justify-items-center">
        <!-- Icons and Text -->
        <div class="w-full flex flex-col items-center lg:flex-row" ref="section3Ref">
          <div
            v-for="item in contentList"
            data-aos="fade-up"
            data-aos-duration="2000"
            :key="item.title"
            :class="['hover-zoom','w-full lg:w-1/4 flex flex-col items-center justify-center text-2xl relative z-2', item.class]"
          >
            <div class="z-10 w-10/12 flex-col items-center justify-center border border-neutral-200 rounded-3xl px-2" style="background-color: #fefff4">
            <div class="mb-2 flex items-center justify-center rounded-full p-6 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="mb-6 flex items-center justify-center text-3xl font-bold">{{ item.title }}</p>
            <p class="mb-6 flex items-center justify-center text-center text-xl text-neutral-05">{{ item.contentText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.dashed-circle {
  @apply w-100px h-100px;
  border: 2px dashed #DDDDDD; /* 設置邊框為黑色虛線 */
  border-radius: 50%; /* 使邊框呈現圓形 */
  position: absolute;
  animation: rotateAnimation 150s linear infinite; /* 應用旋轉動畫，每次動畫持續 50 秒，無限次重復 */
  margin: 20px; /* 為了更好的展示效果，添加一些外邊距 */
  z-index: 1;
}

.hover-zoom {
  transition: transform 0.3s ease-in-out !important;
  cursor: pointer; /* 鼠标悬停时显示指针样式 */
}

.hover-zoom:hover {
  transform: scale(1.1)  translateY(-10px); /* 放大并上浮 */
}

</style>
