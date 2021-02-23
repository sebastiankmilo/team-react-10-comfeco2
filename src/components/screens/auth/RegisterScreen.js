import React from 'react'

import { Flex } from '../../ui/common/Flex'
import { useRedirectIfAuthenticated } from '../../../hooks'
import { RegisterFrom } from './forms/RegisterFrom'

export const RegisterScreen = () => {
  useRedirectIfAuthenticated()
  return (
    <Flex justify="center" align="center" className="h-100">
      <RegisterFrom />
    </Flex>
  )
}
