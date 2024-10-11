<template>
  <div>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <h3>Role: {{ project.role }}</h3>
    <v-img alt="project Image" :src="project.image" />
    <ul>
      <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  export interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
    role: string;
  }
  defineProps<{ project: Project }>()
</script>
