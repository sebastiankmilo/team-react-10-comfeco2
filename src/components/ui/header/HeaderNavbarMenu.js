import React from 'react'
import { Nav } from 'reactstrap'

import { Flex } from '../common/Flex'
import { RouteMap } from '../../../constants/RouteMap'
import { HeaderNavbarItem } from './HeaderNavbarItem'
import { HeaderProfileDropdown } from './HeaderProfileDropdown'

export const HeaderNavbarMenu = () => {
  return (
    <>
      <Flex
        tag={Nav}
        className="me-auto  mx-md-auto w-50"
        justify="around"
        navbar
      >
        <HeaderNavbarItem to={RouteMap.Portal.home()}>Inicio</HeaderNavbarItem>
        <HeaderNavbarItem to={RouteMap.Portal.comunities()}>
          Comunidades
        </HeaderNavbarItem>
        <HeaderNavbarItem to={RouteMap.Portal.workshops()}>
          Talleres
        </HeaderNavbarItem>
        <HeaderNavbarItem to={RouteMap.Portal.contentCreators()}>
          Creadores de contenido
        </HeaderNavbarItem>
      </Flex>
      <HeaderProfileDropdown />
    </>
  )
}
