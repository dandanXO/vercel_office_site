<script lang="ts" setup>
import { imgUrl } from '@/assets'

import { onMounted } from "vue";
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

const img1 = imgUrl('joinUs/join-top.png')
const bk1 = imgUrl('joinUs/joinus1/block-1.png')
const bk2 = imgUrl('joinUs/joinus1/block-2.png')
const bk3 = imgUrl('joinUs/joinus1/block-3.png')
</script>

<template>
  <div class="overflow-hidden overflow-hidden bg-primary-bg text-gray-900">
    <img :src="bk1" class="absolute left-10 top-30 z-0 h-[110px] w-[110px]" />
    <div class="absolute right-0 top-88px z-0 h-[369px] w-[457px] bg-left-bottom bg-no-repeat" :style="'background-image: url('+bk2+')'" style="background-size: 100%"></div>

    <div class="relative mx-auto px-6 py-10 lg:px-20">

      <!-- Title and Description -->
      <div class="mb-20 mt-11 flex flex-col text-left">
        <h1 class="z-10 mb-5 text-6xl font-bold">Join Us</h1>
        <p class="z-10 mb-12 text-3xl text-neutral-06">
          加入我們
        </p>
        <img :src="img1" class="z-10 h-400px rounded-20px object-cover" />
      </div>
      <div class="justify-items-center text-center">

        <h1 class="z-10 mb-5 text-4xl font-bold">精實開發、產品導向的創業家精神</h1>
        <p class="z-10 mb-3 text-xl text-neutral-06">
          我們是一群充滿活力的工程師，共同熱愛遊戲和區塊鏈。我們的使命是持續挑戰自我，砥礪前行，以卓越的技術和創意，開發出高品質的遊戲產品。我們的團隊擁有專業的知識和不懈的追求精神，努力超越業界標準，並為玩家提供令人難以忘懷的遊戲體驗。加入我們，你將成為這個充滿活力和創意的團隊的一部分，一同塑造未來遊戲世界的面貌，為玩家帶來無盡的樂趣和驚喜。我們期待著與您攜手並肩，一同創建卓越的遊戲時刻！
        </p>
      </div>
      <div class="absolute bottom-0 right-0 z-0 h-20 w-20 bg-left-bottom bg-repeat" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
      <div class="absolute left-0 top-162 z-0 h-20 w-20 bg-left-bottom bg-repeat" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
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
