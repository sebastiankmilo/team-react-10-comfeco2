import React from 'react'
import { Flex } from '../../ui/common/Flex'
import { LoginForm } from './LoginForm'

export const LoginScreen = () => {
  return (
    <Flex justify="center" align="center" className="h-100">
      <LoginForm />
    </Flex>
  )
}
