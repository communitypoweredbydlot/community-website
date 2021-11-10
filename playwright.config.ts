import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  reporter: process.env.CI ? [['github'], ['dot']] : 'list'
}
export default config