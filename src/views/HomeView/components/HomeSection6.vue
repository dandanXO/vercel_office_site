<script setup lang="ts">
  import IconArrowRight from '@icons/nd/arrow-right.svg'
</script>
<template>
  <div class="border-b-2px border-white border-solid bg-primary-bg py-20 lg:p-20">
    <div class="mb-2 text-center">
      <h1 class="mb-5 text-32px text-neutral-07 lg:text-40px">有任何需求嗎？</h1>
      <h3 class="text-md text-neutral-06 max-md:px-10% lg:text-20px">
        如果你想了解任何詳細資訊，歡迎直接來信，我們會盡快回覆
      </h3>
    </div>
    <div class="flex items-center justify-center max-md:bg-white">
      <div className="mt-4 flex justify-center lg:justify-start">
            <a
              href="#"
              class="rounded-20px bg-primary px-24px py-16px text-17px text-sm text-black font-500 decoration-none shadow-sm hover:bg-neutral-07 hover:text-white focus-visible:outline-2 focus-visible:outline-primary/70 focus-visible:outline-offset-2 focus-visible:outline"
            >
              瞭解更多 <IconArrowRight class="inline"></IconArrowRight>
            </a>
          </div>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  width: 80%;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  resize: vertical;
  resize: none;
}
::placeholder {
  color: #a0a0a0;
}
.submit-button {
  display: inline-block;
  background-color: #141414;
  color: white;
  border: none;
  padding: 16px 24px 16px 24px;
  border-radius: 20px;
  cursor: pointer;
}
/* RWD Media Queries */
@media (max-width: 768px) {
  .form-wrapper {
    box-shadow: none;
    background: none;
  }
}
</style>
