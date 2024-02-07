<script setup lang="ts">
import { ref } from "vue";

type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: "1. 當前貴公司提供什麼樣的業務？",
    answer:
      '我們當前能向客戶提供以下服務：<p class="mt-3 mb-3">(1) 白標加密貨幣交易所:</p> <p class="ml-6">我們提供一站式的架站，客戶無需再自己養大量的開發人員，僅需專注在交易所的運營業務上。</p><p class="mt-3 mb-3">(2) Web3 應用:</p><p class="ml-6">我們能為客戶客製化其 Web3 應用，包含 DeFi 合約、NFT 合約、各類創新 dApps。</p><p class="mt-3 mb-3">(3) 遊戲代操：</p><p class="ml-6">我們有專門運營國際線上遊戲的專業團隊，提供遊戲代操服務。</p>',
  },
  {
    question: "2. 如果有白標加密貨幣交易所的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理 <a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`,
  },
  {
    question: "3. 如果有 Web3 應用的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`,
  },
  {
    question: "4. 如果您為遊戲提供商，有遊戲代操的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`
  },
  {
    question: "5. 如果有其他商業合作，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`
  },
];

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div
    class="fade-in-bottom flex flex-col items-center justify-center bg-primary p-4"
  >
    <div class="mb-4 py-8 text-4xl font-bold">FAQ</div>
    <div class="w-full px-8 py-8 transition-max-height lg:px-30">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="mb-5 rounded-3 bg-white transition-max-height"
      >
        <button
          class="w-full flex items-center justify-between rounded-3 bg-white px-6 py-6"
          @click="toggle(index)"
        >
          <span>{{ item.question }}</span>
          <span class="arrow-button min-w-[30px] lg:ml-6">
            <i
              class="arrow"
              :class="[activeIndex === index ? 'down' : 'right']"
            ></i>
          </span>
        </button>
        <div
          v-show="activeIndex === index"
          class="overflow-hidden transition-max-height duration-300 ease-in-out"
          :style="{ maxHeight: activeIndex === index ? '1000px' : '0' }"
        >
          <div class="!text-grey p-6" v-html="item.answer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.transition-max-height {
  transition: all 0.3s;
  transition: max-height 0.4s ease-in-out;
}
.arrow-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}
.arrow {
  border: solid #fff;
  border-width: 0px 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transition: 0.3s;
}

.right {
  transform: rotate(-45deg);
}

.down {
  transform: rotate(45deg);
}
</style>
