<script lang="ts" setup>
  import IconArrowRight from '@icons/nd/arrow-right.svg'
  import { imgUrl } from '@/assets'
  const iconList = [
  imgUrl('home/section4/icon1.png'),
  imgUrl('home/section4/icon2.png'),
  imgUrl('home/section4/icon3.png'),
  imgUrl('home/section4/icon4.png')
]
import IconVector2 from '@icons/nd/vector2.svg'
const img1 = imgUrl('home/2-2.png')
const Vector = imgUrl('home/section3/Vector.svg')
const bk1 = imgUrl('joinUs/joinus1/block-1.png')
const sq = imgUrl('service/bg-sq.png')
</script>

<template>
  <div>
    <div class="mb-15 mt-11 flex flex-col text-left lg:px-30">
      <img :src="bk1" class="absolute left-10 top-30 z-0 h-[110px] w-[110px]" />
      <h1 class="z-10 mb-5 text-6xl font-bold">Service</h1>
      <p class="z-10 mb-12 text-3xl text-neutral-06">
        {{ $t('service')  }}
      </p>
    </div>
    <div
      class="flex flex-col-reverse lg:flex-row lg:px-30"
    >
      <div class="w-[50%] flex flex-col justify-around">
        <IconVector2 class="inline h-48px w-43px"></IconVector2>
        <div class="text-[28px] text-blue-05 font-extrabold">WHAT WE DO</div>
        <div class="text-[32px] font-bold font-sans">{{ $t('service_caption1')  }}</div>
        <div class="text-neutral-06 font-[20px]">
          {{ $t('service_caption2')  }}
        </div>
      </div>
      <div class="w-[50%] flex justify-end">
        <img :src="img1" class="ml-20 rounded-20px object-cover !h-400px !w-400px" />
      </div>
    </div>
    <div class="relative mx-auto mb-15 px-8 pb-15 pt-15 lg:px-30">
      <div class="relative z-1 mb-10 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">{{ $t('service')  }}</h1>
        <p class="mb-3 text-neutral-06">
          {{ $t('core_caption')  }}
        </p>
      </div>
      <!-- Cards 1 2 -->
      
      <div class="relative z-1 grid grid-cols-1 mt-10 lg:grid-cols-5">
        <!-- Card 1 -->
        <div class="col-span-2 mb-10 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center lg:mb-0 lg:mr-10 hover:bg-primary">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[0]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">{{ $t('block_chain')  }}</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">{{ $t('blockchain_caption')  }}</p>
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
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[1]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">{{ $t('game')  }}</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">{{ $t('game_caption')  }}</p>
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
      <!-- card 3 4 -->
      <div class="relative z-1 grid grid-cols-1 mt-10 lg:grid-cols-5">

        <!-- Card 3 -->
        <div class="col-span-2 col-span-3 mb-10 flex flex-col border border-neutral-04 rounded-2xl bg-primary-bg p-15 text-center lg:mb-0 lg:mr-10 hover:bg-primary">
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[2]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">{{ $t('brand')  }}</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">{{ $t('brand_caption')  }}</p>
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
          <div class="mb-4">
            <!-- Replace this div with actual icon -->
            <div class="mb-8 flex justify-center rounded-full text-white lg:justify-start">
              <img :src="iconList[3]" class="h-[140px] w-[140px]" />
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold lg:text-left">ESG</h3>
            <p class="text-center text-xs text-neutral-05 lg:text-left">{{ $t('esg_caption')  }}</p>
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
    <div>
      <div class="relative z-1 mb-10 flex flex-col items-center justify-center text-center">
        <img :src="sq" class="absolute left-4 top-[-76px] -z-1">
        <img :src="sq" class="absolute right-4 top-[-76px] -z-1">
        <h1 class="mb-5 text-4xl font-bold">{{ $t('codefine')  }}</h1>
        <p class="mb-3 text-neutral-06">
          {{ $t('codefine_caption')  }}
        </p>
      </div>
      <div class="m-auto h-[56px] w-[140px] rounded-5 bg-black px-4 py-3.2 text-center transition duration-300 hover:bg-gray-500">
        <a
          href="mailto:zoe@newdigit.io"
          class="mx-auto text-center text-base text-white font-500 decoration-none"
          >{{ $t('contact')  }}<IconArrowRight class="ml-1 inline"></IconArrowRight>
          </a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
