import React from 'react'
import { Flex } from '../../ui/common/Flex'
import { ForgotForm } from './forms/ForgotForm'

export const ForgotScreen = () => {
  return (
    <Flex justify="center" align="center" className="h-100">
      <ForgotForm />
    </Flex>
  )
}
