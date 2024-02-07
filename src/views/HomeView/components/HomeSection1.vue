<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import { Vue3Lottie } from 'vue3-lottie'
// import { DotLottieVue as DotLottie } from '@lottiefiles/dotlottie-vue'

import { imgUrl } from '@/assets'

import IconCursor from '@icons/nd/cursor.svg'
import IconArrowRight from '@icons/nd/arrow-right.svg'
import lottie from '@/assets/lottie/home1.json'

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
  <div class="container">
    <div class="mt-60px flex flex-wrap xl:mt-100px xl:justify-between">
      <div class="fade-in-bottom w-full text-center xl:w-3/5 xl:text-start">
        <div class="text-28px font-400 font-rammetto-one xl:text-56px">New Digit Defines</div>
        <div class="mt-14px text-28px font-400 font-rammetto-one xl:text-56px">
          Your&nbsp;
          <span
            class="border-4px border-primary border-rounded-40px border-solid px-16px py-6px xl:border-6px xl:px-24px xl:py-8px"
          >
            Digits
          </span>
          &nbsp;.
          <IconCursor
            class="ml-12px inline h-36px w-36px xl:ml-26px xl:h-64px xl:w-64px"
          ></IconCursor>
        </div>
        <div class="mt-24px text-26px font-700 xl:mt-40px xl:text-40px">
          探索新數位，重新定義未來
        </div>
      </div>
      <div class="mt-40px w-full xl:mt-0 xl:w-2/5">
        <!-- 官方的還有bug -->
        <!-- <dot-lottie :src="lottie" class="h-304px w-359px" autoplay loop></dot-lottie> -->
        <Vue3Lottie
          :animation-data="lottie"
          class="max-h-304px max-w-359px"
          auto-play
          loop
        ></Vue3Lottie>
      </div>
    </div>
    <div>
      <div className="mt-10 flex justify-center xl:justify-start items-center gap-x-6">
        <a
          href="#"
          class="rounded-20px bg-primary px-24px py-16px text-17px text-black font-500 decoration-none shadow-sm hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
        >
          瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
        </a>
      </div>
    </div>
    <div class="mt-100px">
      <Vue3Marquee :duration="15">
        <img v-for="(item, index) in marqueeList" :key="index" :src="item" class="mx-40px" />
      </Vue3Marquee>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  @apply text-28px font-400 font-rammetto-one lg:text-56px;
}
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>
