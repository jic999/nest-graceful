import { Routes } from '@nestjs/core'
import { adminModules } from './admin'

export const routes: Routes = adminModules.map(module => ({
  path: 'admin',
  module,
}))
