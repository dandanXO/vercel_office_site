<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import { Vue3Lottie } from 'vue3-lottie'
// import { DotLottieVue as DotLottie } from '@lottiefiles/dotlottie-vue'

import { imgUrl } from '@/assets'

import IconChavronUp from '@icons/nd/chavron-up.svg'
import IconVector1 from '@icons/nd/vector1.svg'
import IconVector2 from '@icons/nd/vector2.svg'

const sectionRef = ref(null)
const { width: eW, height: eH } = useElementSize(sectionRef)
const marqueeList = [
  imgUrl('home/knock.png'),
  imgUrl('home/zapier.png'),
  imgUrl('home/dribbble.png'),
  imgUrl('home/do.png'),
  imgUrl('home/arc.png'),
  imgUrl('home/byte-dance.png'),
]
</script>

<template>
  <div class="relative overflow-hidden pb-63px pt-160px" ref="sectionRef">
    <div class="mt-60px flex flex-wrap container xl:mt-100px xl:justify-between">
      <div class="mb-64px w-full text-center">
        <div class="text-40px font-900 leading-46px tracking-[4%] font-raleway">New Digit</div>
        <div class="my-4 text-40px font-900 leading-46px tracking-[4%] font-raleway">
          Defines <IconVector1 class="inline h-40px w-40px"></IconVector1> Your
        </div>
        <div class="my-4 text-40px font-900 leading-46px tracking-[4%] font-raleway">
          <IconVector2 class="mr-8px inline h-40px w-40px"></IconVector2>
          <span class="text-primary-hover">Future</span>
          <span class="ml-12px mr-8px border border-r-4px border-neutral-07 rounded-4px"></span>
          <span class="px-10px">.</span>
        </div>
        <div class="mt-24px heading-3">探索新數位，重新定義未來</div>
      </div>
      <div class="w-full flex justify-center">
        <button
          type="submit"
          class="rounded-full bg-primary p-14px text-neutral-07 hover:bg-primary-hover"
        >
          <IconChavronUp class="h-32px w-32px rotate-180"></IconChavronUp>
        </button>
      </div>
    </div>

    <div class="mt-124px">
      <Vue3Marquee :duration="15" gradient gradientLength="15%">
        <img v-for="(item, index) in marqueeList" :key="index" :src="item" class="mx-40px" />
      </Vue3Marquee>
    </div>

    <div
      class="absolute top-0 flex transform items-center justify-center -left-50% -translate-y-1/2"
    >
      <div class="placeholder" :style="{ width: eW + 'px', height: eW + 'px' }"></div>
      <div
        class="dashed-circle-bottom !border-primary"
        :style="{ width: eW + 'px', height: eW + 'px' }"
      ></div>
      <div
        class="dashed-circle-bottom !border-neutral-04"
        :style="{
          width: eW * 0.7 + 'px',
          height: eW * 0.7 + 'px',
        }"
      ></div>
    </div>
    <div class="absolute flex transform items-center justify-center -right-50% -translate-y-1/2">
      <div class="placeholder" :style="{ width: eW + 'px', height: eW + 'px' }"></div>
      <div
        class="dashed-circle-bottom !border-neutral-04"
        :style="{ width: eW + 'px', height: eW + 'px' }"
      ></div>
      <div
        class="dashed-circle-bottom !border-primary"
        :style="{
          width: eW * 0.8 + 'px',
          height: eW * 0.8 + 'px',
        }"
      ></div>
      <div
        class="dashed-circle-bottom !border-neutral-04"
        :style="{
          width: eW * 0.6 + 'px',
          height: eW * 0.6 + 'px',
        }"
      ></div>
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

.dashed-circle-bottom {
  @apply w-190px h-190px;
  border: 2px dashed;
  border-radius: 50%; /* 使邊框呈現圓形 */
  position: absolute;
  animation: rotateAnimation 150s linear infinite; /* 應用旋轉動畫，每次動畫持續 50 秒，無限次重復 */
  margin: 20px; /* 為了更好的展示效果，添加一些外邊距 */
  z-index: -1;
}
</style>
