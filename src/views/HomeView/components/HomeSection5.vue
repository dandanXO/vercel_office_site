<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: i18n.t('question1'),
    answer:
      i18n.t('answer1'),
  },
  {
    question: "2. 如果有白標加密貨幣交易所的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理&nbsp; <a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`,
  },
  {
    question: "3. 如果有 Web3 應用的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理&nbsp;<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`,
  },
  {
    question: "4. 如果您為遊戲提供商，有遊戲代操的需求，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理&nbsp;<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`
  },
  {
    question: "5. 如果有其他商業合作，請問要如何聯繫？",
    answer: `請 Mail 給我們公關業務經理&nbsp;<a class="text-blue" href="mailto:zoe@newdigit.io">zoe@newdigit.io</a>`
  },
];

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div
    class="fade-in-bottom flex flex-col items-center justify-center bg-primary-bg pt-30"
  >
    <div class="mb-10 text-4xl font-black">FAQ</div>
    <div class="w-full px-8 pb-8 transition-max-height lg:px-30">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="mb-5 rounded-3 bg-white transition-max-height"
      >
        <button
          class="w-full flex items-center justify-between rounded-t-3 bg-primary px-6 py-6"
          :class="[{'rounded-b-3':activeIndex !== index }]"
          @click="toggle(index)"
        >
          <span class="font-black">{{ item.question }}</span>
          <span class="arrow-button min-w-[30px] lg:ml-6">
            <i
              class="arrow"
              :class="[activeIndex === index ? 'down' : 'right']"
            ></i>
          </span>
        </button>
        <div
          v-show="activeIndex === index"
          class="overflow-hidden rounded-b-3 bg-primary transition-max-height duration-300 ease-in-out"
          :style="{ maxHeight: activeIndex === index ? '1000px' : '0' }"
        >
          <div class="p-6" v-html="item.answer"></div>
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
