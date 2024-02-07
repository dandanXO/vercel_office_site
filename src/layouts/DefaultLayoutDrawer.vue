<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useAppStore } from '@/stores/app'
import { mainNav } from './const'
import IconEarth from '@icons/nd/earth.svg'

const appStore = useAppStore()
</script>

<template>
  <TransitionRoot as="template" :show="appStore.drawerOpen">
    <Dialog as="div" class="relative z-10" @close="appStore.drawerOpen = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 w-full flex pt-88px">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto relative w-full">
                <div class="h-full w-full overflow-y-auto bg-neutral-03 px-16px py-40px">
                  <div class="h-full flex flex-col justify-between gap-16px">
                    <RouterLink v-for="(item, index) in mainNav" :key="index" to="#">
                      <div
                        class="h-63px flex items-center justify-center rounded-8px hover:cursor-pointer hover:bg-neutral-07 hover:text-white"
                      >
                        {{ item.name }}
                      </div>
                    </RouterLink>
                    <div class="flex-1"></div>
                    <div class="flex items-center justify-center">
                      <IconEarth class="mr-10px" /> 繁體中文
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss" scoped></style>
