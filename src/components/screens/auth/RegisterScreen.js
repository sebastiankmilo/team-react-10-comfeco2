import React from 'react'

import { Flex } from '../../ui/common/Flex'
import { RouteMap } from 'constants/RouteMap'
import { useAuthState, useRedirectWithFlag } from '../../../hooks'
import { RegisterFrom } from './forms/RegisterFrom'

export const RegisterScreen = () => {
  const { uid } = useAuthState()
  useRedirectWithFlag({ url: RouteMap.Dashboard.root(), flag: !!uid })
  return (
    <Flex justify="center" align="center" className="h-100">
      <RegisterFrom />
    </Flex>
  )
}
