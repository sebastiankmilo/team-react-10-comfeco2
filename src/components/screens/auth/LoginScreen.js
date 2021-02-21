import React from 'react'
import { Flex } from '../../ui/common/Flex'
import { LoginForm } from './forms/LoginForm'
import { useAuthState, useRedirectWithFlag } from '../../../hooks'
import { RouteMap } from '../../../constants/RouteMap'

export const LoginScreen = () => {
  const { uid } = useAuthState()
  useRedirectWithFlag({ url: RouteMap.Dashboard.root(), flag: !!uid })
  return (
    <Flex justify="center" align="center" className="h-100">
      <LoginForm />
    </Flex>
  )
}
