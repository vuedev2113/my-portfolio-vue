<script setup lang="ts">
  const experiences = [
    {
      id: 1,
      title: 'Senior Vue.js developer',
      company: 'Upwork (freelancer)',
      duration: '(Sep 2024 - Present)',
    },
    {
      id: 2,
      title: 'Senior Vue.js developer',
      company: 'DataArt in Ukraine',
      duration: '(Oct 2022 - August 2024)',
    },
    {
      id: 3,
      title: 'Junior Frontend developer',
      company: 'Program-Ace in Ukraine',
      duration: '(Jul 2020 - Oct 2022)',
    },
  ]
</script>

<template>
  <div id="experience" class="relative z-50 border-t my-12 lg:my-24 border-[#25213b] w-full">
    <v-img
      alt="Hero"
      class="absolute"
      src="/section.svg"
      width="1872"
    />

    <div class="flex justify-center my-5 lg:py-8">
      <div class="flex  items-center">
        <span class="w-24 h-[2px] bg-[#1a1443]" />
        <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Experiences
        </span>
        <span class="w-24 h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex justify-center items-center h-full">
          <v-img src="/computer.png" />
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="experience in experiences"
            :key="experience.id"
            class="h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl w-full hover:border-[#8072f8]"
          >
            <div class="p-3 relative">
              <v-img
                alt="Hero"
                class="absolute bottom-0 opacity-80"
                height="200"
                src="/blur-23.svg"
                width="1080"
              />
              <div class="flex justify-center">
                <p class="text-xs sm:text-sm text-[#16f2b3]">
                  {{ experience.duration }}
                </p>
              </div>
              <div class="flex items-center gap-x-8 px-3 py-5">
                <div class="text-violet-500  transition-all duration-300 hover:scale-125">
                  <v-icon icon="mdi-calendar" size="36" />
                </div>
                <div>
                  <p class="text-base sm:text-xl mb-2 font-medium uppercase">
                    {{ experience.title }}
                  </p>
                  <p class="text-sm sm:text-base">
                    {{ experience.company }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
