import React, { useMemo, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  Collapse,
  Container,
  Media,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'
import classNames from 'classnames'

import { RouteMap } from '../../../constants/RouteMap'
import { HeaderNavbar } from './HeaderNavbar'

import LogoComplete from '../../../assets/img/logo-complete.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const match = useRouteMatch(RouteMap.Auth.root())

  const isMatch = useMemo(() => !!match, [match])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="faded" light expand="md" className="header">
      <Container>
        <NavbarBrand tag={Link} to={RouteMap.Portal.root()} className="me-auto">
          <Media src={LogoComplete} height="50" alt="Logo completo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          className={classNames('', {
            'flex-grow-0': isMatch,
          })}
          isOpen={isOpen}
          navbar
        >
          <HeaderNavbar />
        </Collapse>
      </Container>
    </Navbar>
  )
}
