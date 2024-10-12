<template>
  <div id="education" class="relative w-full z-50 border-t my-12 lg:my-24 border-[#25213b]">
    <v-img
      alt="Hero"
      class="absolute w-full h-auto"
      src="/section.svg"
    />
    <div class="flex justify-center -translate-y-[1px]">
      <div class="w-3/4">
        <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>

    <div class="flex justify-center my-5 lg:py-8">
      <div class="flex  items-center">
        <span class="w-24 h-[2px] bg-[#1a1443]" />
        <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Educations
        </span>
        <span class="w-24 h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex justify-center items-start">
          <div class="w-3/4 h-3/4">
            <v-img alt="Education" src="/education.png" />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="education in educations"
            :key="education.id"
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
                  {{ education.duration }}
                </p>
              </div>
              <div class="flex items-center gap-x-8 px-3 py-5">
                <div class="text-violet-500  transition-all duration-300 hover:scale-125">
                  <v-icon icon="mdi-calendar" size="36" />
                </div>
                <div>
                  <p class="text-base sm:text-xl mb-2 font-medium uppercase">
                    {{ education.title }}
                  </p>
                  <p class="text-sm sm:text-base">
                    {{ education.institution }}
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

<script setup lang="ts">
  const educations = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      duration: '2017 - 2020',
      institution: 'Kherson National Technical University',
    },
    {
      id: 2,
      title: 'Higher Secondary Certificate',
      duration: '2019 - 2020',
      institution: 'Kherson Programmer Training Center',
    },
  ]
</script>
