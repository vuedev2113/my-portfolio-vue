<template>
  <v-app-bar border="b" class="py-4" density="compact">
    <v-container class="flex justify-between xl:w-[75%]">
      <RouterLink class="flex items-center" to="/">
        <v-btn class="text-none me-2" height="48" icon slim>
          <v-avatar color="surface-light" image="/favicon.ico" size="48" />
        </v-btn>
        <h2 class="font-weight-bold">Oleh Zamryha</h2>
      </RouterLink>
      <v-btn v-if="$vuetify.display.smAndDown" icon slim>
        <v-app-bar-nav-icon />
        <v-menu activator="parent">
          <v-list density="compact" item-props :items="navs" nav />
        </v-menu>
      </v-btn>
      <nav v-else class="flex justify-center items-center gap-4">
        <RouterLink
          v-for="nav, i in navs"
          :key="i"
          :link="nav.link"
          :to="nav.to"
        >
          {{ nav.title }}
        </RouterLink>
      </nav>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
  const navs = [
    {
      title: 'ABOUT',
      link: true,
      to: '#about',
    },
    {
      title: 'EXPERIENCE',
      link: true,
      to: '#experience',
    },
    {
      title: 'SKILLS',
      link: true,
      to: '#skills',
    },
    {
      title: 'EDUCATION',
      link: true,
      to: '#education',
    },
    {
      title: 'PROJECTS',
      link: true,
      to: '#projects',
    },
  ]
</script>
