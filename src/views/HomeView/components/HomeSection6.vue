<script setup lang="ts">
function submitForm() {
  // 表单提交逻辑
}
</script>
<template>
  <div class="p-20">
    <div class="mb-20 text-center">
      <h1 class="mb-5 text-40px text-neutral-07">與我們聯繫</h1>
      <h3 class="text-20px text-neutral-06">
        如果你想了解任何詳細資訊，歡迎直接來信，我們會盡快回覆
      </h3>
    </div>
    <div class="flex items-center justify-center">
      <div class="form-wrapper">
        <form @submit.prevent="submitForm">
          <div class="flex">
            <div class="input-group mr-10 w-45%">
              <label for="name" class="text-neutral-07">姓名*</label>
              <input
                type="text"
                id="name"
                placeholder="輸入你的姓名"
                required
              />
            </div>
            <div class="input-group w-45%">
              <label for="email" class="text-neutral-07">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="輸入 Email"
                required
              />
            </div>
          </div>
          <div class="input-group">
            <label for="message" class="text-neutral-07">留言*</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit" class="submit-button">确认发送 →</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  width: 80%;
  background: white;
  padding: 2rem;
  border-radius: 40px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
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
}

.submit-button {
  display: inline-block;
  background-color: black;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
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
