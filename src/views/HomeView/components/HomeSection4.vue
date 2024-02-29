<script lang="ts" setup>
  import IconArrowRight from '@icons/nd/arrow-right.svg'
  import { imgUrl } from '@/assets'
  const iconList = [
  imgUrl('home/section4/icon1.png'),
  imgUrl('home/section4/icon2.png'),
  imgUrl('home/section4/icon3.png'),
  imgUrl('home/section4/icon4.png')
]
const Vector = imgUrl('home/section3/Vector.svg')
</script>
<template>
  <div  class="relative z-2 bg-primary-bg text-gray-900">
    <div class="relative mx-auto px-8 py-5 lg:px-30">
      <div class="relative z-1 mb-10 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">我們的產品</h1>
        <p class="mb-3 text-neutral-06">
          專注遊戲、Web 3、ESG 三大新興產業賽道
        </p>
      </div>
      <!-- Cards 1 2 -->
      <div class="relative z-1 grid grid-cols-1 lg:grid-cols-5">
        <!-- Card 1 -->
        <div class="col-span-2 mb-10 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center lg:mb-0 lg:mr-10 hover:bg-primary">
          <div class="mb-1">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[0]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">區塊鏈代客開發</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">Web3.0 打造由代幣經濟驅動的互聯網，新數字將協助你與你的企業打造 Web3 新藍海。</p>
          </div>
          <!-- <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div> -->
        </div>

        <!-- Card 2 -->
        <div class="col-span-3 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center hover:bg-primary">
          <div class="mb-1">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[1]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">遊戲代客程式開發/代理</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法、精緻的美術風格和令人難以抗拒的遊戲機制。</p>
          </div>
          <!-- <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div> -->
        </div>
      </div>
      <!-- card 3 4 -->
      <div class="relative z-1 grid grid-cols-1 mt-10 lg:grid-cols-5">

        <!-- Card 3 -->
        <div class="col-span-2 col-span-3 mb-10 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center lg:mb-0 lg:mr-10 hover:bg-primary">
          <div class="mb-1">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[2]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">品牌流量增長</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">提供多種高級專業功能，包括分析工具、社交媒體整合、定製內容創建和排程功能，助您打造更具吸引力的社群內容，增加互動和分享，從而實現社群的持續成長。</p>
          </div>
          <!-- <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div> -->
        </div>

        <!-- Card 4 -->
        <div class="col-span-2 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center hover:bg-primary">
          <div class="mb-1">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[3]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">ESG</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">滿足當代人的需求又不危及後代人滿足其需求的發展，稱之為永續。我們將用科技的力量，具現化一種被人類遺忘的心能力。</p>
          </div>
          <!-- <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>

</style>