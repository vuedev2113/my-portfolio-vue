<script setup lang="ts">
  import { projectsData } from '@/stores/store'
</script>

<template>
  <div id="projects" class="relative w-full z-50  py-12 lg:py-24">
    <div class="sticky top-40">
      <div class="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" />
      <div class="flex items-center justify-start relative">
        <span class="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span class="w-full h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="pt-24">
      <div class="flex items-center flex-col gap-6">
        <div v-for="project in projectsData" :key="project.id" class="sticky-card w-full mx-auto max-w-2xl sticky top-60">
          <div class="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
