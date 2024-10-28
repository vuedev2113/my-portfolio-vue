<template>
  <div id="contact" class="my-12 lg:my-16 relative mt-24 text-white">
    <div class="hidden lg:flex flex-col items-center absolute top-24 -right-8">
      <span class="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
        CONTACT
      </span>
      <span class="h-36 w-[2px] bg-[#1a1443]" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <contact-form />
      <div class="lg:w-3/4 ">
        <div class="flex flex-col gap-5 lg:gap-9">
          <p v-for="info, i in contactInfo" :key="i" class="flex items-center gap-3">
            <a
              class="bg-[#8b98a5] p-2 flex rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              :href="info.name"
              target="_blank"
            >
              <v-icon :icon="info.icon" size="24" />
            </a>
            <span class="text-sm md:text-xl">{{ info.name }}</span>
          </p>
        </div>
        <div class="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
          <a
            v-for="info, i in socialInfo"
            :key="i"
            class="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            :href="info.link"
            target="_blank"
          >
            <v-icon :icon="info.icon" size="36" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { contactInfo, socialInfo } from '@/stores/store'
</script>
