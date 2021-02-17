import React from 'react'
import { Flex } from '../../ui/common/Flex'
import { LoginForm } from './LoginForm'
import { useAuthReducer, useRedirect } from '../../../hooks'
import { RouteMap } from 'constants/RouteMap'

export const LoginScreen = () => {
  const [{ uid }] = useAuthReducer()
  useRedirect(RouteMap.Dashboard.root(), !!uid)
  return (
    <Flex justify="center" align="center" className="h-100">
      <LoginForm />
    </Flex>
  )
}
