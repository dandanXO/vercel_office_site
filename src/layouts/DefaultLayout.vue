<script setup lang="ts">
import { useRouter } from 'vue-router'
// import IconEarth from '@icons/nd/earth.svg'
import IconMenu from '@icons/nd/menu.svg'
import IconClose from '@icons/nd/close.svg'
import IconLogoWhite from '@icons/nd/logo-white.svg'
import DefaultLayoutDrawer from './DefaultLayoutDrawer.vue'
import { breakpointsTailwind } from '@vueuse/core'
import { useAppStore } from '@/stores/app'
import { mainNav } from './const'
import { imgUrl } from '@/assets'
const logo = imgUrl('Logo.png')
const router = useRouter()
const breakpoints = useBreakpoints(breakpointsTailwind)
const appStore = useAppStore()
</script>

<template>
  <header class="h-88px w-full flex items-center lg:px-30" :class="[{'bg-primary': appStore.drawerOpen}]">
    <IconLogoWhite @click="router.push('/')" class="h-64px w-64px cursor-pointer" v-show="!appStore.drawerOpen"/>
    <template v-if="breakpoints.lg.value">
      <div class="flex flex-1 justify-center">
        <router-link
          v-for="item in mainNav"
          :key="item.name"
          :to="item.to"
          class="px-5 py-3 text-base text-black font-500 decoration-none hover:text-gray-500"
          >{{ item.name }}</router-link
        >
      </div>
      <div class="flex flex-row items-center hover:cursor-pointer">
        <div class="inlin border-2 border-black rounded-5 px-4 py-3.2 hover:border-gray-500 hover:text-gray-500">
        <a
          href="mailto:zoe@newdigit.io"
          class="text-base font-500 decoration-none"
          >聯絡我們</a
        >
      </div>
      <!-- <div class="inlin ml-8">
        <IconEarth class="text-black"></IconEarth>
      </div> -->
      </div>
    </template>
    <template v-else>
      <div class="flex-1"></div>
      <button
        type="button"
        class="relative inline-flex flex-shrink-0 items-center justify-center rounded-md bg-white/0 p-1 hover:rounded-[100%] hover:bg-primary"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      >
        <IconClose class="h-32px w-32px" v-if="appStore.drawerOpen" />
        <IconMenu class="h-32px w-32px" v-else />
      </button>
      <default-layout-drawer />
    </template>
  </header>
  <main class="overflow-hidden">
    <router-view></router-view>
  </main>

  <footer class="border-t-2px border-white border-solid lg:px-30">
    <div
      class="flex flex-col flex-wrap items-center justify-between gap-32px py-40px xl:flex-row xl:py-120px"
    >
      <!-- <IconLogoWhite class="h-64px w-64px" /> -->
      <img :src="logo" class="" />
      <div class="flex flex-col gap-32px xl:flex-row xl:gap-80px">
        <div class="flex flex-row gap-18px text-neutral-07 hover:cursor-pointer">
          <div class="text-16px text-neutral-06 font-400 hover:text-gray-500" @click="router.push('/about')" >關於新數字</div>
          <div class="border-r border-neutral-06"></div>
          <div class="text-16px text-neutral-06 font-400 hover:text-gray-500" @click="router.push('/service')" >服務項目</div>
          <div class="border-r border-neutral-06"></div>
          <div class="text-16px text-neutral-06 font-400 hover:text-gray-500" @click="router.push('/joinus')">加入我們</div>
          <div class="border-r border-neutral-06"></div>
          <a href="mailto:zoe@newdigit.io" class="text-16px text-neutral-06 font-400">聯絡我們</a>
        </div>
      </div>
      <!-- <div class="flex flex-col w-full mt-64px gap-18px xl:mt-0 xl:w-auto">
        <div class="text-16px text-neutral-07 font-700">訂閱電子報</div>
        <div class="text-14px text-neutral-06 font-400">第一時間掌握我們的消息！</div>
        <form
          class="flex justify-between border-solid border-1 border-neutral-04 rounded-20px bg-neutral-01 px-20px py-8px xl:w-360px"
        >
          <label for="email-address" class="sr-only">你的信箱</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            class="flex-1 min-w-0 border-0 rounded-20px placeholder:text-gray-400 sm:leading-6 focus:outline-0"
            placeholder="你的信箱"
          />
          <button
            type="submit"
            class="text-sm text-black rounded-20px bg-primary p-16px font-500 hover:bg-primary-hover"
          >
            <div>確認訂閱</div>
          </button>
        </form>
      </div> -->
    </div>
    <div class="py-8px text-center text-14px text-neutral-05 font-500 font-raleway xl:text-16px">
      Copyright © New Digit Ltd.
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
