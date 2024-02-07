<script setup lang="ts">
function submitForm() {
  // 表单提交逻辑
}
</script>
<template>
  <div class="border-b-2px border-white border-solid py-20 lg:p-20">
    <div class="mb-20 text-center">
      <h1 class="mb-5 text-32px text-neutral-07 lg:text-40px">與我們聯繫</h1>
      <h3 class="text-15px text-neutral-06 max-md:px-10% lg:text-20px">
        如果你想了解任何詳細資訊，歡迎直接來信，我們會盡快回覆
      </h3>
    </div>
    <div class="flex items-center justify-center max-md:bg-white">
      <div class="w-100% border-rounded-40px bg-white p-5% lg:w-80%">
        <form @submit.prevent="submitForm">
          <div class="lg:flex">
            <div class="input-group mr-10 w-100% lg:w-45%">
              <label for="name" class="font-size-20px text-neutral-07 fw-700"
                >姓名*</label
              >
              <input
                type="text"
                id="name"
                placeholder="輸入你的姓名"
                required
              />
            </div>
            <div class="input-group w-100% lg:w-45%">
              <label for="email" class="font-size-20px text-neutral-07 fw-700"
                >Email*</label
              >
              <input
                type="email"
                id="email"
                placeholder="輸入 Email"
                required
              />
            </div>
          </div>
          <div class="input-group">
            <label for="message" class="font-size-20px text-neutral-07 fw-700"
              >留言*</label
            >
            <textarea id="message" required class="h-240px"></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button type="submit" class="submit-button font-size-16px">
              確認送出 →
            </button>
          </div>
        </form>
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
