<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
// import { DotLottieVue as DotLottie } from '@lottiefiles/dotlottie-vue'
import EasyTyper from 'easy-typer-js'
import { imgUrl } from '@/assets'

import IconChavronUp from '@icons/nd/chavron-up.svg'
import IconVector1 from '@icons/nd/vector1.svg'
import IconVector2 from '@icons/nd/vector2.svg'
import { breakpointsTailwind } from '@vueuse/core'

const { xl } = useBreakpoints(breakpointsTailwind)

const sectionRef = ref(null)
const { width: eW, height: eH } = useElementSize(sectionRef)
const marqueeList = [
  imgUrl('home/knock.png'),
  imgUrl('home/zapier.png'),
  imgUrl('home/dribbble.png'),
  imgUrl('home/do.png'),
  imgUrl('home/arc.png'),
  imgUrl('home/byte-dance.png'),
]
const titleType = reactive({
  output: '',
  isEnd: false,
  speed: 80,
  singleBack: false,
  sleep: 500,
  type: 'rollback',
  backSpeed: 80,
  sentencePause: false,
})

function startType() {
  new EasyTyper(
    titleType,
    ['Future', 'Digits', 'Destiny'],
    () => {
      startType()
    },
    () => {}
  )
}

onMounted(() => {
  startType()
})
</script>

<template>
  <div class="relative overflow-hidden pb-63px pt-160px xl:pt-125px" ref="sectionRef">
    <div class="mt-60px flex flex-wrap container xl:mt-100px xl:justify-between">
      <div v-if="xl" class="mb-72px w-full text-center">
        <div class="text-80px font-900 leading-94px tracking-[4%] font-raleway">
          New Digit Defines <IconVector1 class="inline h-48px w-48px"></IconVector1>
        </div>
        <div class="mb-16px ml-[25%] w-full text-left">
          <span class="text-80px font-900 leading-94px tracking-[4%] font-raleway"
            >Your <IconVector2 class="inline h-48px w-43px"></IconVector2
          ></span>
            
          <span class="relative mx-4 text-80px text-primary-hover font-900 leading-94px tracking-[4%]">
            {{ titleType.output }}
            
          </span>
          <span
              class="ml-0 mr-8px border border-r-4px border-t-32px border-neutral-07 rounded-8px"
            ></span>
        </div>
        <div class="heading-3">探索新數位，重新定義未來</div>
      </div>
      <div class="mb-64px w-full text-center" v-else>
        <div class="text-40px font-900 leading-46px tracking-[4%] font-raleway">New Digit?</div>
        <div class="my-4 text-40px font-900 leading-46px tracking-[4%] font-raleway">
          Defines <IconVector1 class="inline h-40px w-40px"></IconVector1> Your
        </div>
        <div class="my-4 text-40px font-900 leading-46px tracking-[4%] font-raleway">
          <IconVector2 class="mr-8px inline h-40px w-40px"></IconVector2>
          <span class="text-primary-hover">{{ titleType.output }}</span>
          <span class="ml-12px mr-8px border border-r-4px border-neutral-07 rounded-4px"></span>
        </div>
        <div class="mt-24px heading-3">探索新數位，重新定義未來</div>
      </div>
      <div class="w-full flex justify-center">
        <button
          type="submit"
          class="rotate-180 rounded-full bg-primary p-14px text-neutral-07 hover:bg-primary-hover"
        >
          <IconChavronUp class="bounce h-32px w-32px"></IconChavronUp>
        </button>
      </div>
    </div>

    <div class="mt-124px">
      <Vue3Marquee :duration="15" gradient gradientLength="15%" :gradient-color="[254, 255, 244]" direction="reverse" :loop="0">
        <img v-for="(item, index) in marqueeList" :key="index" :src="item" class="mx-40px" />
      </Vue3Marquee>
    </div>

    <template v-if="xl">
      <div
        class="absolute left-0 top-0 flex transform items-center justify-center -z-1 -translate-x-1/3 -translate-y-1/3"
      >
        <div class="placeholder" :style="{ width: 603 + 'px', height: 603 + 'px' }"></div>
        <div
          class="dashed-circle-bottom !border-primary"
          :style="{ width: 604 + 'px', height: 604 + 'px' }"
        ></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{
            width: 404 + 'px',
            height: 404 + 'px',
          }"
        ></div>
      </div>
      <div
        class="absolute right-0 flex translate-x-1/2 transform items-center justify-center -z-1 -translate-y-1/2"
      >
        <div class="placeholder" :style="{ width: 768 + 'px', height: 768 + 'px' }"></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{ width: 768 + 'px', height: 768 + 'px' }"
        ></div>
        <div
          class="dashed-circle-bottom !border-primary"
          :style="{
            width: 568 + 'px',
            height: 568 + 'px',
          }"
        ></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{
            width: 368 + 'px',
            height: 368 + 'px',
          }"
        ></div>
      </div>
    </template>
    <template v-else>
      <div
        class="absolute top-0 flex transform items-center justify-center -left-50% -z-1 -translate-y-1/2"
      >
        <div class="placeholder" :style="{ width: eW + 'px', height: eW + 'px' }"></div>
        <div
          class="dashed-circle-bottom !border-primary"
          :style="{ width: eW + 'px', height: eW + 'px' }"
        ></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{
            width: eW * 0.7 + 'px',
            height: eW * 0.7 + 'px',
          }"
        ></div>
      </div>
      <div
        class="absolute flex transform items-center justify-center -right-50% -z-1 -translate-y-1/2"
      >
        <div class="placeholder" :style="{ width: eW + 'px', height: eW + 'px' }"></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{ width: eW + 'px', height: eW + 'px' }"
        ></div>
        <div
          class="dashed-circle-bottom !border-primary"
          :style="{
            width: eW * 0.8 + 'px',
            height: eW * 0.8 + 'px',
          }"
        ></div>
        <div
          class="dashed-circle-bottom !border-neutral-04"
          :style="{
            width: eW * 0.6 + 'px',
            height: eW * 0.6 + 'px',
          }"
        ></div>
      </div>
    </template>
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

.dashed-circle-bottom {
  @apply w-100px h-100px;
  border: 2px dashed;
  border-radius: 50%; /* 使邊框呈現圓形 */
  position: absolute;
  animation: rotateAnimation 150s linear infinite; /* 應用旋轉動畫，每次動畫持續 50 秒，無限次重復 */
  margin: 20px; /* 為了更好的展示效果，添加一些外邊距 */
  z-index: -2;
}

.bounce {
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}
</style>
