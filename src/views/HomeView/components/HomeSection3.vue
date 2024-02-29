<script lang="ts" setup>
import { imgUrl } from '@/assets'
const section3Ref = ref(null)
// import { useWindowSize } from '@vueuse/core'
// import { useElementSize } from '@vueuse/core'
// const { width:eW, height:eH } = useElementSize(section3Ref)
const bk1 = imgUrl('home/section3/block-1.png')
const bk2 = imgUrl('home/section3/block-2.png')

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
    class: 'lg:m-b-40'
  },
  {
    title: '遊戲樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      'Gaming enjoyment',
    class: 'lg:m-b-0'
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      'Rapid iteration',
    class: 'lg:m-b-40'
  },
  {
    title: '激勵驅動',
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      'Incentive-driven',
    class: 'lg:m-b-0'
  },
]
const Vector = imgUrl('home/section3/Vector.svg')
</script>

<template>
  <div class="overflow-hidden bg-primary-bg text-gray-900">
    
    <div class="relative mx-auto px-6 lg:px-10">
      <!-- Title and Description -->
      <div class="relative z-2 mb-15 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">我們的價值觀</h1>
        <p class="mb-3 text-neutral-06">
          新數字致力於為客戶定義全新的企業數字 DNA，為客戶在原有的賽道創造新藍海
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="relative w-full flex flex-col items-center lg:flex-row" ref="section3Ref">
        <img :src="bk2" class="absolute right-10 z-0 h-90 w-90 -top-50" />
        <div
          v-for="item in contentList"
          data-aos="fade-up"
          data-aos-duration="2000"
          :key="item.title"
          :class="['hover-zoom','w-full lg:w-1/4 flex flex-col items-center justify-center text-2xl relative z-2', item.class]"
        >
          <div class="z-10 w-10/12 flex-col items-center justify-center border border-neutral-200 rounded-3xl px-2 px-5 py-14 lg:min-h-362px lg:min-w-285px" style="background-color: #fefff4">
            <div class="mb-2 flex items-center justify-center rounded-full p-6 text-white">
              <!-- Replace with an SVG or icon font class -->
              <img :src="item.icon" class="h-[96px] w-[96px]" />
            </div>
            <p class="mb-6 flex items-center justify-center text-[28px]">{{ item.title }}</p>
            <p class="mb-6 flex items-center justify-center text-center text-[20px] text-neutral-05">{{ item.contentText }}</p>
          </div>
        </div>
        <img :src="bk1" class="absolute bottom-0 left-6 z-0 h-[80px] w-[80px]" />
        <img :src="bk1" class="absolute bottom-0 left-36 z-0 h-[80px] w-[80px]" />
      </div>
      <!-- <div class="absolute right-50% transform items-center justify-center -bottom-10% lg:flex">
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
      </div> -->
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
