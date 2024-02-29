<script lang="ts" setup>
import { imgUrl } from '@/assets'
import { reactive } from 'vue'



import { onMounted, nextTick } from "vue";
import AOS from 'aos';
import jobData from './jd-data.json'
onMounted(() => {
    AOS.init();
})

const contentList = reactive(jobData)
const Vector = imgUrl('joinUs/joinus3/Vector.svg')
const arrowRight = imgUrl('joinUs/joinus3/arrow-right.svg')

const handleExpand = (index = 0) => {
  index ? index:0
  nextTick().then(()=>{
    
  })
  setTimeout(()=>{
    contentList[index].expand = !contentList[index].expand
  }, 200)
}
</script>

<template>
  <div class="overflow-hidden bg-primary-bg text-gray-900">
    
    <div class="relative mx-auto justify-items-center px-6 py-10 lg:px-20">
      <!-- Title and Description -->
      <div class="mb-5 flex flex-col items-center justify-center text-center">
        <img :src="Vector" class="mb-5 h-[42px] w-[42px]" />
        <h1 class="mb-5 text-4xl font-bold">加入我們</h1>
        <p class="mb-3 text-xl text-neutral-06">
          下方為我們目前正在招募的職缺，如果下方找不到你的職位，也歡迎來信自薦！
        </p>
      </div>

      <!-- Cards and Image Layout -->
      <div class="flex items-center justify-center">
        <table class="border-collapse">
          <thead class="" style="background-color:#E4FF00;">
          <tr>
            <th class="px-2 py-2 text-left text-base">職位名稱</th>
            <th class="">
              <div class="px-2 py-2 text-left text-base">類別</div>
            </th>
            <th class="px-2 py-2 text-left text-base">職位描述</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item , index) in contentList" :key="item.title">
            <td valign="top" class="px-2 py-6 text-left">
                <div class="text-base text-neutral-06 font-bold">{{item.jobName}}</div>
                <div class="font-bold">{{item.title}}</div>
            </td>
            <td width="200" valign="top" class="px-2 py-6 text-left text-sm font-normal">
              <div class="hs-100px">{{item.type}}</div>
            </td>
            <td class="w-12/12 flex px-6 py-6 text-left text-sm font-normal">
              
                <!--展开的 code start-->
                <!-- <Transition name="drawer" key="1"> -->
                  <div v-if="item.expand" class="h-12 text-ellipsis" style="width:560px;height:auto;text-overflow:ellipsis;">
                    <div v-for="(mytext, mkey) in item.contentText" :key="mkey">
                      {{mytext}}
                    </div>
                    <div class="mb-5 mt-15">
                    <a :href="item?.url || 'https://www.104.com.tw/company/1a2x6bmr13?jobsource=index_s'">
                      <button class="m-5 ml-0 flex border rounded-full px-4 py-4 text-base" style="background-color: transparent;border:1px solid #141414">
                        投遞履歷 <img :src="arrowRight" class="h-6 w-6" />
                      </button>
                    </a>
                    </div>
                  </div>
                <!-- </Transition> -->
                <!--展开的 code end-->
                <!--合起来的 code start-->
                <!-- <Transition name="drawer2" key="2"> -->
                  <div v-if="!item.expand" class="h-20" style="width:560px;display: -webkit-box;overflow: hidden;-webkit-box-orient: vertical;-webkit-line-clamp: 4;">
                    <div v-for="(mytext, mkey) in item.contentText" :key="mkey">
                      {{mytext}}
                    </div>
                  </div>
                <!-- </Transition> -->
                <!--合起来的 code end-->
              <div class="flex justify-center" style="width: calc(100% - 560px);">
                <div class="mb-2 h-[60px] w-[60px] flex cursor-pointer items-center justify-center rounded-full bg-neutral-07 p-6 text-white hover:bg-gray-500" @click="handleExpand(index as number)">
                  <img :src="Vector" class="h-[96px] w-[96px]" :class="item.expand?'translationCircle':'translationCircleBack'"/>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

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

.hover-zoom {
  transition: transform 0.3s ease-in-out !important;
  cursor: pointer; /* 鼠标悬停时显示指针样式 */
}

.hover-zoom:hover {
  transform: scale(1.1)  translateY(-10px); /* 放大并上浮 */
}

.translationCircle {
  transform: rotate(180deg);
  transition: all 0.5s ease;
}

.translationCircleBack {
  transform: rotate(0 deg);
  transition: all 0.5s ease;
}

.drawer-enter-active {
  transition: all 2s ; 
}
// .drawer-leave-active {
  
// }
.drawer-enter-to{
  max-height: 100vh;
}

.drawer-enter-from {
  // transform: translateX(20px);
  opacity: 0;
  // transition: all 0.25s ease;
  max-height: 0px;
}
.drawer-leave-to{
  max-height: 100vh;
  opacity: 0;
  display: none;
}
.drawer-leave-from{
  max-height: 0px;
  opacity: 0;
  display: none;
}


.drawer2-enter-active {
  transition: all 2s ;
}
// .drawer2-leave-active {
  
// }
.drawer2-enter-to{
  max-height: 100px;
}

.drawer2-enter-from {
  // transform: translateX(20px);
  opacity: 0;
  max-height: 0px;
}
.drawer2-leave-to{
  max-height: 90vh;
  opacity: 0;
  display: none;
}
.drawer2-leave-from{
  max-height: 0px;
  opacity: 0;
  display: none;
}


</style>
