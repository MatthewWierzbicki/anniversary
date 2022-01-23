/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable'

export const ParticlesWrapper = lazyLoad(
  () => import('./index'),
  module => module.ParticlesWrapper,
)
