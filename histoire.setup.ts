import { defineSetupVue3 } from '@histoire/plugin-vue'

import './dist/style.css'
import { plugin as Pinceau } from 'pinceau/runtime'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(Pinceau)
})