<template>
  <div id="skills" class="relative w-full z-50 border-t my-12 lg:my-24 border-[#25213b]">
    <div class="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20" />

    <div class="flex justify-center -translate-y-[1px]">
      <div class="w-3/4">
        <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>

    <div class="flex justify-center my-5 lg:py-8">
      <div class="flex  items-center">
        <span class="w-24 h-[2px] bg-[#1a1443]" />
        <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Skills
        </span>
        <span class="w-24 h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="w-full my-12">
      <vue-marquee-slider
        id="marquee-slider-loop"
        :space="20"
        :speed="50000"
        :width="144"
      >
        <div
          v-for="skill, id in skillsData"
          :key="id"
          class="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
        >
          <div class="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
            <div class="flex -translate-y-[1px] justify-center">
              <div class="w-3/4">
                <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 p-6">
              <div class="h-8 sm:h-10">
                <v-img
                  :alt="skill.title"
                  class="h-full w-auto rounded-lg"
                  height="40"
                  :src="skill.src"
                  width="40"
                />
              </div>
              <p class="text-white text-sm sm:text-lg">
                {{ skill.title }}
              </p>
            </div>
          </div>
        </div>
      </vue-marquee-slider>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { VueMarqueeSlider } from 'vue3-marquee-slider'
  import '../../../node_modules/vue3-marquee-slider/dist/style.css'
  const skillsData = [
    {
      title: 'Vue',
      src: '/svg/skills/vue.svg',
    },
    {
      title: 'VuetifyJS',
      src: '/svg/skills/vuetifyjs.svg',
    },
    {
      title: 'ViteJS',
      src: '/svg/skills/vitejs.svg',
    },
    {
      title: 'Nuxt JS',
      src: '/svg/skills/nuxtJS.svg',
    },
    {
      title: 'Javascript',
      src: '/svg/skills/javascript.svg',
    },
    {
      title: 'Typescript',
      src: '/svg/skills/typescript.svg',
    },
    {
      title: 'React',
      src: '/svg/skills/react.svg',
    },
    {
      title: 'Next JS',
      src: '/svg/skills/nextJS.svg',
    },
    {
      title: 'HTML',
      src: '/svg/skills/html.svg',
    },
    {
      title: 'CSS',
      src: '/svg/skills/css.svg',
    },
    {
      title: 'Tailwind',
      src: '/svg/skills/tailwind.svg',
    },
    {
      title: 'MongoDB',
      src: '/svg/skills/mongoDB.svg',
    },
    {
      title: 'MySQL',
      src: '/svg/skills/mysql.svg',
    },
    {
      title: 'PostgreSQL',
      src: '/svg/skills/postgresql.svg',
    },
    {
      title: 'Git',
      src: '/svg/skills/git.svg',
    },
    {
      title: 'AWS',
      src: '/svg/skills/aws.svg',
    },
    {
      title: 'Bootstrap',
      src: '/svg/skills/bootstrap.svg',
    },
    {
      title: 'Docker',
      src: '/svg/skills/docker.svg',
    },
    {
      title: 'Firebase',
      src: '/svg/skills/firebase.svg',
    },
    {
      title: 'MaterialUI',
      src: '/svg/skills/materialui.svg',
    },
  ]
</script>
