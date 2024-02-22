<script lang="ts" setup>
import { imgUrl } from '@/assets'
const section3Ref = ref(null)
import { useWindowSize } from '@vueuse/core'
import { useElementSize } from '@vueuse/core'
const { width:eW, height:eH } = useElementSize(section3Ref)

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
    class: 'lg:m-t-50'
  },
  {
    title: '快樂樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      'Gaming enjoyment',
    class: 'lg:m-b-90'
  },
  {
    title: '激動驅動',
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      'Incentive-driven',
    class: 'lg:m-t-60'
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      'Rapid iteration',
    class: 'lg:m-b-60'
  },
]
const Vector = imgUrl('home/section3/Vector.svg')
</script>

<template>
  <div class="overflow-hidden bg-primary-bg text-gray-900">
    
    <div class="relative mx-auto px-6 py-10 lg:px-20">
      <!-- Title and Description -->
      <div class="mb-10 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">
          新數字致力於為客戶定義全新的企業數字 DNA，為客戶在原有的賽道創造新藍海
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
            <div class="mb-2 rounded-full p-4 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="text-lg">{{ item.title }}</p>
            <p class="text-center text-lg text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
      </div>
      <div class="absolute right-50% transform items-center justify-center -bottom-10% lg:flex">
        <div  
            class="dashed-circle"
            :class="['hidden lg:block']"
            :style="{width: 566+'px', height:566+'px'}">
      </div>
      <div  
            class="dashed-circle !border-primary"
            :style="{width: 831+'px', height: 831+'px'}">
      </div>
      <div  
            class="dashed-circle"
            :style="{width: 1089+'px', height: 1089+'px'}">
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
