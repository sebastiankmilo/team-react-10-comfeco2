import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Media, Navbar, NavbarBrand } from 'reactstrap'

import { Flex } from '../common/Flex'
import { RouteMap } from '../../../constants/RouteMap'
import { HeaderActions } from './HeaderActions'

import LogoComplete from '../../../assets/img/logo-complete.svg'

export const Header = () => (
  <Navbar color="faded" light expand="md" className="header">
    <Container>
      <Flex justify="center" className="w-100 justify-content-md-start">
        <NavbarBrand tag={Link} to={RouteMap.Home.root()}>
          <Media src={LogoComplete} height="50" alt="Logo completo" />
        </NavbarBrand>
      </Flex>
      <HeaderActions />
    </Container>
  </Navbar>
)
