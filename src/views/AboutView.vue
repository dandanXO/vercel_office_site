<script setup lang="ts">
import IconVector2 from '@icons/nd/vector2.svg'
import IconArrowRight from '@icons/nd/arrow-right.svg'
import { imgUrl } from '@/assets'
const Vector = imgUrl('home/section3/Vector.svg')
const img1 = imgUrl('home/2-1.png')
const bk1 = imgUrl('joinUs/joinus1/block-1.png')
const bk2 = imgUrl('joinUs/joinus1/block-2.png')
const bk3 = imgUrl('joinUs/joinus1/block-3.png')
const footer1 = imgUrl('joinUs/footer-left-top.png')
const footer2 = imgUrl('joinUs/footer-right-bottom.png')
</script>

<template>
  <div class="mx-auto px-8 pt-5 lg:px-30">
    <img :src="bk1" class="absolute left-10 top-30 z-0 h-[110px] w-[110px]" />
    <div class="absolute right-0 top-88px z-0 h-[369px] w-[457px] bg-left-bottom bg-no-repeat" :style="'background-image: url('+bk2+')'" style="background-size: 100%"></div>

    <div class="mb-20 mt-11 flex flex-col text-left">
        <h1 class="z-10 mb-5 text-6xl font-bold">About Us</h1>
        <p class="z-10 mb-12 text-3xl text-neutral-06">
          {{ $t('about')  }}
        </p>
      </div>
    <div
      class="flex flex-col-reverse lg:flex-row"
     >
      <div class="w-[405px]">
        <img :src="img1" class="rounded-20px object-cover !h-605px !w-405px" />
      </div>
      <div class="ml-20 w-[55%] flex flex-col justify-around">
        <IconVector2 class="inline h-48px w-43px"></IconVector2>
        <div class="text-[28px] text-blue-05 font-extrabold">WHO WE ARE?</div>
        <div class="text-[32px] font-bold font-sans">{{$t('about_caption1')}}</div>
        <div class="text-neutral-06 font-[20px]">
          {{$t('about_caption2')}}
        </div>
      </div>
    </div>
    <div class="relative mt-25 text-center">
      <div class="absolute top-0 z-0 h-20 w-20 bg-left-bottom bg-repeat -left-30" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
      <div class="absolute bottom-0 z-0 h-20 w-20 bg-left-bottom bg-repeat -right-30" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
      <div class="mb-5 text-[32px] font-bold font-sans">
        {{$t('degital_redefine')}}
      </div>
      <div class="mb-5 text-[1.2rem] text-neutral-06">
        New Digit Defines Your Experience
      </div>
      <div class="text-neutral-06 font-[20x]">
        {{$t('newdigit_defines')}}
      </div>
    </div>

    <div class="relative z-1 mb-10 mt-25 flex flex-col items-center justify-center text-center">
      <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
      <h1 class="mb-5 text-4xl font-bold">{{$t('core')}}</h1>
      <p class="mb-3 text-neutral-06">
        {{$t('core_caption')}}
      </p>
      <div class="relative z-2 mt-15 w-full">
        <div class="relative w-full flex flex-row items-center">
          <div class="absolute transform items-center justify-center -bottom-[10%] -bottom-10% -left-[10%] -z-1 lg:flex">
            <div  
                  class="dashed-circle"
                  :class="['hidden lg:block']"
                  :style="{width: 368+'px', height:368+'px'}">
            </div>
            <div  
                  class="dashed-circle !border-primary"
                  :style="{width: 568+'px', height: 568+'px'}">
            </div>
            <div  
                  class="dashed-circle"
                  :style="{width: 768+'px', height: 768+'px'}">
            </div>
          </div>
          <div class="z-2 mr-5 w-1/2 bg-primary-bg">
            <div class="border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
              <div class="mb-4 text-[24px] text-blue-05 font-bold">
                Creation
              </div>
              <div class="mb-4 text-[32px] text-neutral-07 font-bold">
                {{$t('innovation')}}
              </div>
              <div class="text-[20px] text-neutral-06">
                {{$t('innovation_caption')}}
              </div>
            </div>
          </div>
          <div class="mr-5 w-1/2">
            <div class="mb-10 border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
              <div class="mb-4 text-[24px] text-blue-05 font-bold">
                Customization
              </div>
              <div class="mb-4 text-[32px] text-neutral-07 font-bold">
                {{$t('customization')}}
              </div>
              <div class="text-[20px] text-neutral-06">
                {{$t('customization_caption')}}
              </div>
            </div>
            <div class="border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
              <div class="mb-4 text-[24px] text-blue-05 font-bold">
                Collaboration
              </div>
              <div class="mb-4 text-[32px] text-neutral-07 font-bold">
                {{$t('collaboration')}}
              </div>
              <div class="text-[20px] text-neutral-06">
                {{$t('collaboration_caption')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-2 mt-18.75 w-full bg-primary-bg pb-25 lg:px-30">
    <img :src="footer1" class="absolute top-6 z-0 z-1 h-[340px] w-[340px] -left-30" />
    <img :src="footer2" class="absolute bottom-6 z-0 h-[340px] w-[340px] -right-30" />
    <div class="relative z-2 flex">
      <div class="mr-5 mt-22 max-h-[288px] w-1/2 border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
        <div class="mb-4 text-[32px] text-neutral-07 font-extrabold">
          Let's talk !
        </div>
        <div class="text-[20px] text-neutral-06">
          {{$t('talk_caption')}}
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <a
            href="https://www.104.com.tw/company/1a2x6bmr13?jobsource=index_s"
            class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm transition duration-300 hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
          >
          {{$t('contact')}} <IconArrowRight class="inline"></IconArrowRight>
          </a>
        </div>
      </div>
      <div class="ml-5 mt-52 max-h-[288px] w-1/2 border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
        <div class="mb-4 text-[32px] text-neutral-07 font-extrabold">
          Join Us !
        </div>
        <div class="text-[20px] text-neutral-06">
          {{$t('join_caption')}}
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <a
          href="https://www.104.com.tw/company/1a2x6bmr13?jobsource=index_s"
            class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm transition duration-300 hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
          >
          {{$t('join')}} <IconArrowRight class="inline"></IconArrowRight>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.dashed-circle {
  @apply w-100px h-100px;
  border: 2px dashed #DDDDDD; /* 設置邊框為黑色虛線 */
  border-radius: 50%; /* 使邊框呈現圓形 */
  position: absolute;
  animation: rotateAnimation 150s linear infinite; /* 應用旋轉動畫，每次動畫持續 50 秒，無限次重復 */
  margin: 20px; /* 為了更好的展示效果，添加一些外邊距 */
  z-index: 1;
}
</style>
