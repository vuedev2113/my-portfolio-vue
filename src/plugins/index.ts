/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'
import Vue3Lottie from 'vue3-lottie'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(Vue3Lottie)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
