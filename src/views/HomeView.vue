<script setup lang="ts">
import { imgUrl } from '@/assets'
import IconEarth from '@icons/nd/earth.svg'
import HomeSection1 from './HomeView/components/HomeSection1.vue'
import HomeSection3 from './HomeView/components/HomeSection3.vue'

const logoWhite = imgUrl('logo-white.svg')
const mainNav = [
  { name: '關於新數字', to: '/' },
  { name: '產品', to: '/product' },
  { name: '人才招募', to: '/career' },
  { name: '聯絡我們', to: '/contact' },
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
    <HomeSection1 />
    <!-- Section 2 -->
    <div class="relative mt-87px bg-neutral-07 py-150px">
      <img class="absolute bottom-0 left-0" :src="imgUrl('home/2-bg-1.png')" />
      <img class="absolute right-0 top-0" :src="imgUrl('home/2-bg-2.png')" />
      <div class="relative z-1 hidden text-center text-40px text-white font-700 xl:block">
        定義全新的企業數字 DNA
      </div>
      <div class="relative z-1 flex flex-wrap justify-between gap-60px xl:mt-80px xl:gap-0">
        <div
          class="w-full text-center xl:w-1/3"
          v-for="(item, index) in [
            { num: '5', sub: '國家' },
            { num: '100+', sub: '客戶' },
            { num: '300+', sub: '員工' },
          ]"
          :key="index"
        >
          <div class="text-50px text-primary font-800 font-mulish">{{ item.num }}</div>
          <div class="mt-16px text-20px text-neutral-04 font-400 font-mulish">{{ item.sub }}</div>
        </div>
      </div>
    </div>
    <!-- Section 3 -->
    <HomeSection3 />
  </main>

  <footer class="border-t-2px border-white border-solid">
    <div class="flex flex-wrap justify-between py-128px container">
      <div class="flex flex-col gap-32px xl:flex-row xl:gap-80px">
        <img :src="logoWhite" class="h-64px w-64px" />
        <div class="flex flex-col gap-18px text-neutral-07">
          <div class="text-16px font-700">關於我們</div>
          <div class="text-14px font-400">部落格</div>
          <div class="text-14px font-400">加入我們</div>
        </div>
        <div class="flex flex-col gap-18px text-neutral-07">
          <div class="text-16px font-700">產品</div>
          <div class="text-14px font-400">特色</div>
          <div class="text-14px font-400">使用者條款</div>
          <div class="text-14px font-400">隱私權政策</div>
        </div>
      </div>
      <div class="mt-64px w-full flex flex-col gap-18px xl:mt-0">
        <div class="text-16px text-neutral-07 font-700">訂閱電子報</div>
        <div class="text-14px text-neutral-06 font-400">第一時間掌握我們的消息！</div>
        <form
          class="flex justify-between border-1 border-neutral-04 rounded-20px border-solid bg-neutral-01 px-20px py-8px xl:w-360px"
        >
          <label for="email-address" class="sr-only">你的信箱</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            class="min-w-0 flex-1 border-0 rounded-20px placeholder:text-gray-400 sm:leading-6 focus:outline-0"
            placeholder="你的信箱"
          />
          <button
            type="submit"
            class="rounded-20px bg-primary p-16px text-sm text-black font-500 hover:bg-primary/80"
          >
            <div>確認訂閱</div>
          </button>
        </form>
      </div>
    </div>
    <div class="py-8px text-center text-18px text-neutral-05 font-400">
      Copyright © New Digital
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
