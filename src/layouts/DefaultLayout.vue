<script setup lang="ts">
import IconEarth from '@icons/nd/earth.svg'
import IconMenu from '@icons/nd/menu.svg'
import IconClose from '@icons/nd/close.svg'
import IconLogoWhite from '@icons/nd/logo-white.svg'
import DefaultLayoutDrawer from './DefaultLayoutDrawer.vue'
import { breakpointsTailwind } from '@vueuse/core'
import { useAppStore } from '@/stores/app'
import { mainNav } from './const'

const breakpoints = useBreakpoints(breakpointsTailwind)
const appStore = useAppStore()
</script>

<template>
  <header class="h-88px flex items-center container">
    <IconLogoWhite class="h-64px w-64px" />
    <template v-if="breakpoints.xl.value">
      <div class="flex flex-1 items-center justify-center">
        <router-link
          v-for="item in mainNav"
          :key="item.name"
          :to="item.to"
          class="px-5 py-3 text-base text-black font-500 decoration-none"
          >{{ item.name }}</router-link
        >
      </div>
      <div class="hover:cursor-pointer">
        <IconEarth class="text-black"></IconEarth>
      </div>
    </template>
    <template v-else>
      <div class="flex-1"></div>
      <button
        type="button"
        class="relative inline-flex flex-shrink-0 items-center justify-center rounded-md bg-white/0 hover:text-black/80"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      >
        <IconClose class="h-32px w-32px" v-if="appStore.drawerOpen" />
        <IconMenu class="h-32px w-32px" v-else />
      </button>
      <default-layout-drawer />
    </template>
  </header>
  <main>
    <router-view></router-view>
  </main>

  <footer class="border-t-2px border-white border-solid">
    <div
      class="flex flex-col flex-wrap items-center justify-between gap-32px py-40px container xl:flex-row xl:py-120px"
    >
      <IconLogoWhite class="h-64px w-64px" />
      <div class="flex flex-col gap-32px xl:flex-row xl:gap-80px">
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
      <!-- <div class="mt-64px w-full flex flex-col gap-18px xl:mt-0 xl:w-auto">
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
            class="rounded-20px bg-primary p-16px text-sm text-black font-500 hover:bg-primary-hover"
          >
            <div>確認訂閱</div>
          </button>
        </form>
      </div> -->
    </div>
    <div class="py-8px text-center text-16px text-neutral-05 font-500 font-raleway">
      Copyright © New Digital
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
