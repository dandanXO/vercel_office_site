<script setup lang="ts">
import IconVector2 from '@icons/nd/vector2.svg'
import { imgUrl } from '@/assets'
const Vector = imgUrl('home/section3/Vector.svg')
const img1 = imgUrl('home/2-1.png')
</script>

<template>
  <div class="relative mx-auto px-8 pb-25 pt-5 lg:px-30">
    <div>
      About Us
      <div>關於新數字</div>
    </div>
    <div
      class="flex flex-col-reverse lg:flex-row lg:px-30"
     >
      <div class="w-[405px]">
        <img :src="img1" class="rounded-20px object-cover !h-605px !w-405px" />
      </div>
      <div class="ml-20 w-[55%] flex flex-col justify-around">
        <IconVector2 class="inline h-48px w-43px"></IconVector2>
        <div class="text-[28px] text-blue-05 font-extrabold">WHO WE ARE?</div>
        <div class="text-[32px] font-bold font-sans">為全球客戶提供品牌增長、Web3 整合、遊戲開發等解決方案，定義全新數位體驗</div>
        <div class="text-neutral-06 font-[20px]">
          新數字為一跨國集團：台灣總部負責集團的研發中心，專注於 Web3 代客開發/整合、交易所 SaaS 平台開發、遊戲代客開發/代理、品牌流量增長，並用 ESG 理念貫徹台灣政府主力推動的永續行動。
        </div>
      </div>
    </div>
    <div class="mt-25 text-center">
      <div class="mb-5 text-[32px] font-bold font-sans">
        數位體驗再定義
      </div>
      <div class="mb-5 text-neutral-06 font-[24px]">
        New Digit Defines Your Experience
      </div>
      <div class="text-neutral-06 font-[20x]">
        不只是一個口號，而是一個承諾。我們深刻理解您的需求，並以前瞻的視角創造數位產品及解決方案。持續創新，釋放您的數位影響力，創造嶄新的機會。
      </div>
    </div>

    <div class="relative z-1 mb-10 mt-25 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">新數字三大核心價值 3C</h1>
        <p class="mb-3 text-neutral-06">
          專注 Web 3、遊戲產業、品牌增長、ESG 四大新興產業賽道
        </p>
      </div>

  
  </div>
</template>

<style lang="scss" scoped>

</style>
