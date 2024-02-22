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
    title: '遊戲樂趣',
    icon: imgUrl('home/section3/icon2.png'),
    contentText:
      'Gaming enjoyment',
    class: 'lg:m-b-90'
  },
  {
    title: '快速迭代',
    icon: imgUrl('home/section3/icon3.png'),
    contentText:
      'Rapid iteration',
    class: 'lg:m-t-60'
  },
  {
    title: '激勵驅動',
    icon: imgUrl('home/section3/icon4.png'),
    contentText:
      'Incentive-driven',
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
        <h1 class="mb-5 text-4xl font-bold">加入我們</h1>
        <p class="mb-3 text-neutral-06">
          下方為我們目前正在招募的職缺，如果下方找不到你的職位，也歡迎來信自薦！
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="justify-items-center">
        <!-- Icons and Text -->
<!--        <caption class="caption-top">-->
<!--          Table 3.1: Professional wrestlers and their signature moves.-->
<!--        </caption>-->
        <table class="table-fixed border-collapse border border-slate-400 w-full">
          <thead>
          <tr>
            <th>職位名稱</th>
            <th>類別</th>
            <th>職位描述</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          </tbody>
        </table>

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
