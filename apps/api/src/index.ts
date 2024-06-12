import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({
  role: 'ADMIN',
})

console.log(ability.can('manage', 'all'))
