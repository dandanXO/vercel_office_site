<script setup lang="ts">
import IconVector from '@icons/nd/vector.svg'
import { imgUrl } from '@/assets'
const props = defineProps<{
  sectionVisible: boolean
}>()
const img1 = imgUrl('home/2-1.png')

const goals = ref([
  {
    num: 0,
    numTarget: 5,
    numStr: '',
    sub: '國家',
  },

  { num: 0, numTarget: 100, numStr: '+', sub: '客戶' },
  { num: 0, numTarget: 300, numStr: '+', sub: '員工' },
])

watch(
  () => props.sectionVisible,
  (val) => {
    if (val) {
      console.log('section2 is visible')
      goals.value.forEach((goal) => {
        // let c = goal.num
        let updateCounter = () => {
          let c = goal.num

          let increment = goal.numTarget / 100

          if (c < goal.numTarget) {
            goal.num = Math.ceil(c + increment)
            // goal.num = Math.round(Math.random() * 100)
            // c = Math.ceil(c + increment)
            setTimeout(updateCounter, 2) //單位:ms
          } else {
            goal.num = goal.numTarget
          }
        }
        updateCounter()
      })
    }
  }
)
</script>

<template>
  <div
    class="flex flex-row items-center py-40px xl:justify-between xl:px-30 xl:py-60px"
  >
    <div>
      <img :src="img1" class="h-408px rounded-20px object-cover" />
    </div>
    <div class="flex flex-col pr-[10%]">
      <div
        class="flex flex-col items-center justify-center gap-40px py-76px xl:items-start xl:py-60px"
      >
        <div class="flex flex-col items-center justify-center xl:items-start">
          <IconVector class="mb-16px h-43px w-43px" />
          <div class="header-2 xl:header-1">我們的里程碑</div>
        </div>
        <div
          class="flex items-center gap-10px xl:justify-start"
          v-for="(item, index) in goals"
          :key="index"
          ref="sectionRef"
        >
          <span class="text-50px text-neutral-07 font-700 leading-55px font-raleway">{{
            item.num + item.numStr
          }}</span>
          <span class="title-md">{{ item.sub }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
