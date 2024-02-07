<script lang="ts" setup>
  import IconArrowRight from '@icons/nd/arrow-right.svg'
  import { imgUrl } from '@/assets'


  const backgroundImg = imgUrl('home/section4/Block.svg')
  const iconList = [
  imgUrl('home/section4/icon1.png'),
  imgUrl('home/section4/icon2.png'),
  imgUrl('home/section4/icon3.png'),
  imgUrl('home/section4/icon4.png')
]
</script>
<template>
  <div  class="bg-gray-100 text-gray-900">
    <div class="relative mx-auto px-8 py-5 lg:px-40">
      <img :src="backgroundImg" class="absolute right-0 -top-16" />
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-4xl font-bold">我們的產品</h1>
        <p class="mb-3 text-neutral-06">
          我們深入了解您的需求，並以全新的方式看待數位世界
        </p>
      </div>
      <!-- Cards 1 2 -->
      <div class="grid grid-cols-1 lg:grid-cols-5">
        <!-- Card 1 -->
        <div class="col-span-2 mb-10 flex flex-col border border-neutral-07 rounded-2xl p-6 text-center lg:mb-0 lg:mr-10">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-3 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[0]" class="h-[96px] w-[96px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">WEB 3</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">Web3.0 打造由代幣經濟驅動的互聯網，新數字將協助你與你的企業打造 Web3 新藍海。</p>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
          <a
            href="#"
            class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-primary/70 focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
          >
            瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
          </a>
      </div>
        </div>

        <!-- Card 2 -->
        <div class="col-span-3 flex flex-col border border-neutral-07 rounded-2xl p-6 text-center">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-3 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[1]" class="h-[96px] w-[96px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">遊戲</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">我們致力於打造自有 IP 以打通遊戲、影視娛樂、商品周邊產業的全方位經紀公司，提供獨特的核心玩法、精緻的美術風格和令人難以抗拒的遊戲機制。</p>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-primary/70 focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div>
        </div>
      </div>
      <!-- card 3 4 -->
      <div class="grid grid-cols-1 mt-10 lg:grid-cols-5">

        <!-- Card 3 -->
        <div class="col-span-2 col-span-3 mb-10 flex flex-col border border-neutral-07 rounded-2xl p-6 text-center lg:mb-0 lg:mr-10">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-3 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[2]" class="h-[96px] w-[96px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">AI+</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">我們將「人工智能」作為當前行業科技化發展的核心特徵並提取出來，並與工業、商業、金融業各行各業全面融合。</p>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-primary/70 focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-span-2 flex flex-col border border-neutral-07 rounded-2xl p-6 text-center">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-3 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[3]" class="h-[96px] w-[96px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">綠色行動</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">滿足當代人的需求又不危及後代人滿足其需求的發展，稱之為永續。我們將用科技的力量，具現化一種被人類遺忘的心能力。</p>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-primary/70 focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div>
        </div>
      </div>
      <img :src="backgroundImg" class="absolute bottom-0 left-0" />
    </div>
  </div>


</template>

<style lang="scss" scoped>

</style>