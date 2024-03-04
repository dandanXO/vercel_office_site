<script setup lang="ts">
import IconVector from '@icons/nd/vector.svg'
import { imgUrl } from '@/assets'
import { useI18n } from 'vue-i18n'
const props = defineProps<{
  sectionVisible: boolean
}>()
const img1 = imgUrl('home/2-1.png')
const i18n = useI18n()
const goals = ref([
  {
    num: 0,
    numTarget: 5,
    numStr: '',
    sub: i18n.t('country'),
  },

  { num: 0, numTarget: 100, numStr: '+', sub: i18n.t('client') },
  { num: 0, numTarget: 300, numStr: '+', sub: i18n.t('employee') },
])

watch(
  () => props.sectionVisible,
  (val) => {
    if (val) {
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
    class="flex flex-col-reverse items-center py-40px xl:flex-row xl:justify-between xl:px-30 xl:py-60px"
  >
    <div>
      <img :src="img1" class="h-400px w-600px rounded-20px object-cover" />
    </div>
    <div class="flex flex-col pr-[10%]">
      <div
        class="flex flex-col items-center justify-center gap-40px py-76px xl:items-start xl:py-60px"
      >
        <div class="flex flex-col items-center justify-center xl:items-start">
          <IconVector class="mb-16px h-43px w-43px" />
          <div class="header-2 xl:header-1">{{ $t('our_stone')  }}</div>
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
