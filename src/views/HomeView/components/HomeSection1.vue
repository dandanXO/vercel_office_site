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
    <div class="mt-100px flex justify-between">
      <div class="fade-in-bottom w-3/5">
        <div class="font-rammetto-one text-56px font-400">New Digit Defines</div>
        <div class="font-rammetto-one mt-14px text-56px font-400">
          Your&nbsp;
          <span class="border-6px border-primary border-rounded-40px border-solid px-24px py-8px">
            Digits
          </span>
          &nbsp;.
          <IconCursor class="ml-26px"></IconCursor>
        </div>
        <div class="mt-40px text-40px font-700">探索新數位，重新定義未來</div>
      </div>
      <div class="w-2/5">
        <!-- 官方的還有bug -->
        <!-- <dot-lottie :src="lottie" class="h-304px w-359px" autoplay loop></dot-lottie> -->
        <Vue3Lottie :animation-data="lottie" :height="304" :width="359" auto-play loop></Vue3Lottie>
      </div>
    </div>
    <div>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          class="rounded-20px bg-primary px-24px py-16px text-17px text-black font-500 decoration-none shadow-sm hover:bg-primary/70 focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
        >
          瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
        </a>
      </div>
    </div>
    <div class="mt-100px">
      <Vue3Marquee>
        <img v-for="(item, index) in marqueeList" :key="index" :src="item" class="mx-40px" />
      </Vue3Marquee>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>
