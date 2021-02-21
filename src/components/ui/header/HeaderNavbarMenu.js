import React from 'react'
import { Nav } from 'reactstrap'

import { Flex } from '../common/Flex'
import { RouteMap } from '../../../constants/RouteMap'
import { HeaderNavbarItem } from './HeaderNavbarItem'

export const HeaderNavbarMenu = () => {
  return (
    <Flex
      tag={Nav}
      className="me-auto  mx-md-auto w-50"
      justify="around"
      navbar
    >
      <HeaderNavbarItem to={RouteMap.Portal.root()}>Inicio</HeaderNavbarItem>
      <HeaderNavbarItem to="inicio">Comunidades</HeaderNavbarItem>
      <HeaderNavbarItem to="inicio">Talleres</HeaderNavbarItem>
      <HeaderNavbarItem to="inicio">Creadores de contenido</HeaderNavbarItem>
    </Flex>
  )
}
