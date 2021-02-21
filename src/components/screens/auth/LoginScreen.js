import React from 'react'
import { Flex } from '../../ui/common/Flex'
import { LoginForm } from './forms/LoginForm'
import { useRedirectIfAuthenticated } from '../../../hooks'

export const LoginScreen = () => {
  useRedirectIfAuthenticated()
  return (
    <Flex justify="center" align="center" className="h-100">
      <LoginForm />
    </Flex>
  )
}
