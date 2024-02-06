<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import { Vue3Lottie } from 'vue3-lottie'

import { imgUrl } from '@/assets'
// import { DotLottieVue as DotLottie } from '@lottiefiles/dotlottie-vue'

import IconEarth from '@icons/nd/earth.svg'
import IconCursor from '@icons/nd/cursor.svg'
import IconArrowRight from '@icons/nd/arrow-right.svg'
import lottie from '@/assets/lottie/home1.json'

const logoWhite = imgUrl('logo-white.svg')
const mainNav = [
  { name: '關於新數字', to: '/' },
  { name: '產品', to: '/product' },
  { name: '人才招募', to: '/career' },
  { name: '聯絡我們', to: '/contact' },
]
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
  <header class="h-88px flex items-center container">
    <img :src="logoWhite" class="h-64px w-64px" />
    <div class="flex flex-1 items-center justify-center">
      <router-link
        v-for="item in mainNav"
        :key="item.name"
        :to="item.to"
        class="px-5 py-3 text-base text-black font-500 decoration-none"
        >{{ item.name }}</router-link
      >
    </div>
    <div>
      <IconEarth class="text-black hover:cursor-pointer"></IconEarth>
    </div>
  </header>
  <main>
    <!-- Section 1 -->
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
          <Vue3Lottie
            :animation-data="lottie"
            :height="304"
            :width="359"
            auto-play
            loop
          ></Vue3Lottie>
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
    <!-- Section 1 End -->
    <!-- Section 2 -->
    <div class="bg-neutral-07 relative mt-87px py-150px">
      <!-- <div
        class="absolute bottom-0 left-0"
        :style="{ backgroundImage: `url(${imgUrl('home/2-bg-1.png')})` }"
      ></div> -->
      <img class="absolute bottom-0 left-0" :src="imgUrl('home/2-bg-1.png')" />
      <img class="absolute right-0 top-0" :src="imgUrl('home/2-bg-2.png')" />
      <div class="relative z-1 text-center text-40px text-white font-700">
        定義全新的企業數字 DNA
      </div>
      <div class="relative z-1 mt-80px flex justify-between">
        <div
          class="w-1/3 text-center"
          v-for="(item, index) in [
            { num: '5', sub: '國家' },
            { num: '100+', sub: '客戶' },
            { num: '300+', sub: '員工' },
          ]"
          :key="index"
        >
          <div class="font-mulish text-50px text-primary font-800">{{ item.num }}</div>
          <div class="font-mulish mt-16px text-20px text-white font-400">{{ item.sub }}</div>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<style lang="scss" scoped>
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
/**
 * ----------------------------------------
 * animation fade-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
