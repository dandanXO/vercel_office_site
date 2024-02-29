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
          關於新數字
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
        <div class="text-[32px] font-bold font-sans">為全球客戶提供品牌增長、Web3 整合、遊戲開發等解決方案，定義全新數位體驗</div>
        <div class="text-neutral-06 font-[20px]">
          新數字為一跨國集團：台灣總部負責集團的研發中心，專注於 Web3 代客開發/整合、交易所 SaaS 平台開發、遊戲代客開發/代理、品牌流量增長，並用 ESG 理念貫徹台灣政府主力推動的永續行動。
        </div>
      </div>
    </div>
    <div class="relative mt-25 text-center">
      <div class="absolute top-0 z-0 h-20 w-20 bg-left-bottom bg-repeat -left-30" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
      <div class="absolute bottom-0 z-0 h-20 w-20 bg-left-bottom bg-repeat -right-30" :style="'background-image: url('+bk3+')'" style="background-size: 50%"></div>
      <div class="mb-5 text-[32px] font-bold font-sans">
        數位體驗再定義
      </div>
      <div class="mb-5 text-[1.2rem] text-neutral-06">
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
                前沿創新
              </div>
              <div class="text-[20px] text-neutral-06">
                跟隨趨勢，更創造趨勢！新數字致力於開拓新的數位可能性，讓您的未來更加精彩。
              </div>
            </div>
          </div>
          <div class="mr-5 w-1/2">
            <div class="mb-10 border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
              <div class="mb-4 text-[24px] text-blue-05 font-bold">
                Customization
              </div>
              <div class="mb-4 text-[32px] text-neutral-07 font-bold">
                個性化數位體驗
              </div>
              <div class="text-[20px] text-neutral-06">
                無論您是企業領袖、創業家還是夢想家，我們都將為您打造一個完全獨一無二的數字解決方案體驗。
              </div>
            </div>
            <div class="border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
              <div class="mb-4 text-[24px] text-blue-05 font-bold">
                Collaboration
              </div>
              <div class="mb-4 text-[32px] text-neutral-07 font-bold">
                共同成長
              </div>
              <div class="text-[20px] text-neutral-06">
                我們的成功建立在您的成功之上。我們不僅是您的合作夥伴，更是您的共同成長伙伴。讓我們一起探索新數位，重新定義未來。這將是一場令人興奮的數位旅程。
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
          如果你想了解任何詳細資訊，歡迎直接來信，我們會盡快回覆！
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <a
            href="https://www.104.com.tw/company/1a2x6bmr13?jobsource=index_s"
            class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
          >
            聯絡我們 <IconArrowRight class="inline"></IconArrowRight>
          </a>
        </div>
      </div>
      <div class="ml-5 mt-52 max-h-[288px] w-1/2 border border-neutral-07 rounded-40px bg-primary-bg px-15 py-10 text-left">
        <div class="mb-4 text-[32px] text-neutral-07 font-extrabold">
          Join Us !
        </div>
        <div class="text-[20px] text-neutral-06">
          你的加入本質上就是一種創業！讓我們一起徜徉在 Web3 的 Blue Ocean
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <a
          href="https://www.104.com.tw/company/1a2x6bmr13?jobsource=index_s"
            class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
          >
            聯絡我們 <IconArrowRight class="inline"></IconArrowRight>
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
