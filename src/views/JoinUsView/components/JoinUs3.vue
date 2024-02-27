<script lang="ts" setup>
import { imgUrl } from '@/assets'
import { reactive } from 'vue'



import { onMounted } from "vue";
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

const contentList = reactive([
  {
    jobName: '開發工程師 (中級)',
    title: 'Android Engineer',
    type: '正職 1 名',
    expand: false,
    contentText: [
        '協同團隊進行開發。',
        '編寫清晰的程式邏輯，根據產品需求完成功能模組、編碼測試及優化工作。',
        '專科及以上學歷，資訊工程或其他相關專業。',
        '',
        '【工作內容】',
        ' 1. 負責以網站、數位設計建置之專案管理。',
        ' 2. 專案時程、風險、預算之控管。',
        ' 3. 專案需求釐清、擬定網站架構圖、Wireframe 繪製。',
        ' 4. 跨部門溝通、協調客戶＆團隊之共同目標。',
        '',
        '【必備條件】',
        ' . 口條清晰、具有說服力。',
        ' . 具備網站從建立到上線的相關基礎知識理解。',
        ' . 具備品牌識別建立規範的相關知識理解。',
        '',
        '【加分條件】',
        ' . 曾經是設計師、工程師之工作經驗。',
    ],
  },
  {
    jobName: '開發工程師 (中級)',
    title: 'Android Engineer',
    type: '正職 1 名',
    // descript: '',
    expand: false,
    contentText: [
      '協同團隊進行開發。',
      '編寫清晰的程式邏輯，根據產品需求完成功能模組、編碼測試及優化工作。',
      '專科及以上學歷，資訊工程或其他相關專業。',
      '',
      '【工作內容】',
      ' 1. 負責以網站、數位設計建置之專案管理。',
      ' 2. 專案時程、風險、預算之控管。',
      ' 3. 專案需求釐清、擬定網站架構圖、Wireframe 繪製。',
      ' 4. 跨部門溝通、協調客戶＆團隊之共同目標。',
      '',
      '【必備條件】',
      ' . 口條清晰、具有說服力。',
      ' . 具備網站從建立到上線的相關基礎知識理解。',
      ' . 具備品牌識別建立規範的相關知識理解。',
      '',
      '【加分條件】',
      ' . 曾經是設計師、工程師之工作經驗。',
    ],
  },
  {
    jobName: '開發工程師 (中級)',
    title: 'Android Engineer',
    type: '正職 1 名',
    // descript: '',
    expand: false,
    contentText: [
      '協同團隊進行開發。',
      '編寫清晰的程式邏輯，根據產品需求完成功能模組、編碼測試及優化工作。',
      '專科及以上學歷，資訊工程或其他相關專業。',
      '',
      '【工作內容】',
      ' 1. 負責以網站、數位設計建置之專案管理。',
      ' 2. 專案時程、風險、預算之控管。',
      ' 3. 專案需求釐清、擬定網站架構圖、Wireframe 繪製。',
      ' 4. 跨部門溝通、協調客戶＆團隊之共同目標。',
      '',
      '【必備條件】',
      ' . 口條清晰、具有說服力。',
      ' . 具備網站從建立到上線的相關基礎知識理解。',
      ' . 具備品牌識別建立規範的相關知識理解。',
      '',
      '【加分條件】',
      ' . 曾經是設計師、工程師之工作經驗。',
    ],
  },
])
const Vector = imgUrl('joinUs/joinus3/Vector.svg')
const arrowRight = imgUrl('joinUs/joinus3/arrow-right.svg')

const handleExpand = (index = 0) => {
  index ? index:0
  contentList[index].expand = !contentList[index].expand
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
        <table class="border-collapse" style="width: 1040px">
          <thead class="" style="background-color:#E4FF00;">
          <tr>
            <th class="px-2 py-2 text-left text-base">職位名稱</th>
            <th class="px-2 py-2 text-left text-base">類別</th>
            <th class="px-2 py-2 text-left text-base">職位描述</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item , index) in contentList" :key="item.title">
            <td class="w-2/12 px-2 py-2 text-left">
              <div class="text-base text-neutral-06 font-bold">{{item.jobName}}</div>
              <div class="font-bold">{{item.title}}</div>

            </td>
            <td class="w-1/12 px-2 py-2 text-left text-sm font-normal">{{item.type}}</td>
            <td class="w-12/12 flex px-6 py-6 text-left text-sm font-normal">
                <!--展开的 code start-->
                
                  <div v-if="item.expand" class="h-12 text-ellipsis" style="width:560px;height:auto;text-overflow:ellipsis;">
                    <div v-for="(mytext, mkey) in item.contentText" :key="mkey">
                      {{mytext}}
                    </div>
                    <div class="mb-5 mt-15">
                    <button class="m-5 ml-0 flex border rounded-full px-4 py-4 text-base" style="background-color: transparent;border:1px solid #141414">
                      投遞履歷 <img :src="arrowRight" class="h-6 w-6" />
                    </button>
                    </div>
                  </div>
                
                <!--展开的 code end-->
                <!--合起来的 code start-->
                
                <div v-if="!item.expand" class="h-20" style="width:560px;display: -webkit-box;overflow: hidden;-webkit-box-orient: vertical;-webkit-line-clamp: 4;">
  <!--                     {{item.contentText}}-->
                  <div v-for="(mytext, mkey) in item.contentText" :key="mkey">
                    {{mytext}}
                  </div>
                </div>
                
                <!--合起来的 code end-->
              <div class="flex justify-center" style="width: calc(100% - 560px);">
                <div class="mb-2 h-[60px] w-[60px] flex cursor-pointer items-center justify-center rounded-full p-6 text-white" style="background-color: #141414" @click="handleExpand(index as number)">
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

.drawer {
  width: 0;
  overflow: hidden;
  transition: width 0.5s ease;
  background-color: #f0f0f0;
  /* 其他樣式 */
}

.drawer-enter-active, .drawer-leave-active {
  width: 250px; /* 展開時的寬度 */
}

.drawer-enter, .drawer-leave-to /* Vue 2.1.8 版本及以上 */ {
  width: 0;
}

</style>
