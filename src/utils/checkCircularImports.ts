/**
 * Utility to help prevent circular imports
 * This file provides patterns and guidelines to avoid circular dependencies
 */

// ❌ BAD: Direct imports that can cause circular dependencies
// import store from '@/store'
// import { signOutSuccess } from '@/store'

// ✅ GOOD: Use lazy imports for store access in services
// const { default: store } = await import('@/store/storeSetup')
// const { signOutSuccess } = await import('@/store/slices/auth/sessionSlice')

// ✅ GOOD: Import types separately
// import type { RootState } from '@/store/types'

// ✅ GOOD: Import hooks separately
// import { useAppDispatch, useAppSelector } from '@/store/hook'

export const CIRCULAR_IMPORT_PREVENTION_TIPS = {
  services: 'Use lazy imports when accessing store from services',
  types: 'Import types from dedicated types file',
  hooks: 'Import hooks from dedicated hook file',
  actions: 'Import actions directly from slice files when needed in services',
  store: 'Avoid importing store index in services, use storeSetup directly'
} as const

export default CIRCULAR_IMPORT_PREVENTION_TIPS
