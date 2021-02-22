import React, { useCallback, useState } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'

import { useAuthState, useContextDispatch } from '../../../hooks'
import * as AuthAction from '../../../actions/AuthAction'
import { Flex } from '../common/Flex'

export const HeaderProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { nick = 'Ricardo' } = useAuthState()

  const dispatch = useContextDispatch()

  const logout = useCallback(() => {
    dispatch(AuthAction.logoutAuth())
  }, [dispatch])

  const toggle = () => setDropdownOpen(!dropdownOpen)
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <Flex
        tag={DropdownToggle}
        align="center"
        justify="between"
        style={{
          minWidth: 150,
          height: 40,
          borderRadius: '28.1998px 5px 5px 28.1998px',
          paddingLeft: 4,
          paddingRight: 8,
        }}
        caret
      >
        <div
          className="rounded-circle d-inline-block"
          style={{
            height: 32,
            width: 32,
            backgroundColor: '#6D6D6D',
            marginRight: 5,
          }}
        />
        {nick}
      </Flex>
      <DropdownMenu right>
        <DropdownItem onClick={logout}>Cerrar Sesion</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
