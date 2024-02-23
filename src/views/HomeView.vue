<script setup lang="ts">

import HomeSection1 from './HomeView/components/HomeSection1.vue'
import HomeSection2 from './HomeView/components/HomeSection2.vue'
import HomeSection3 from './HomeView/components/HomeSection3.vue'
import HomeSection4 from './HomeView/components/HomeSection4.vue'
import HomeSection5 from './HomeView/components/HomeSection5.vue'
import HomeSection6 from './HomeView/components/HomeSection6.vue'

const windowsSize = useWindowSize()
const section2Ref = ref(null)
const section2Position = useElementBounding(section2Ref)
const section2Visible = computed(() => section2Position.top.value < windowsSize.height.value - 250)
</script>

<template>
  <div>
    <HomeSection1 />
    <!-- Section 2 -->
    <HomeSection2 :section-visible="section2Visible" ref="section2Ref" class="my-40px xl:my-60px" />
    <!-- Section 3 -->
    <HomeSection3 />
    <!-- Section 4 -->
    <HomeSection4 class="pt-30" />
    <!-- Section 5 -->
    <HomeSection5 class="" />
    <!-- Section 6 -->
    <HomeSection6 class="" />
  </div>
</template>

<style lang="scss" scoped>
.fade-in-bottom-delay-0 {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.fade-in-bottom-delay-1 {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
}
.fade-in-bottom-delay-2 {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
}
</style>
