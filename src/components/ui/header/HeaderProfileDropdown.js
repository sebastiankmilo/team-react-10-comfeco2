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
  const { nick = 'Desconocido', avatar } = useAuthState()

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
        className="bg-muted header-dropdown-profile"
        caret
      >
        <img
          className="rounded-circle img-fluid header-dropdown-profile-avatar"
          src={avatar}
          alt={nick}
        />
        {nick}
      </Flex>
      <DropdownMenu right>
        <DropdownItem onClick={logout}>Cerrar Sesion</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
