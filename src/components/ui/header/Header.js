import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Media, Nav, Navbar, NavbarBrand } from 'reactstrap'
import LogoComplete from '../../../assets/img/logo-complete.svg'
import { RouteMap } from '../../../constants/RouteMap'
import { HeaderActionButton } from './HeaderActionButton'
export const Header = () => {
  const { pathname: currentPath } = useLocation()
  const history = useHistory()
  return (
    <Navbar color="faded" light expand="md" className="boder-bottom-line">
      <Container>
        <NavbarBrand href="/">
          <Media src={LogoComplete} height="50" alt="Logo completo" />
        </NavbarBrand>
        <Nav className="ml-auto flex-row align-items-center">
          {currentPath === RouteMap.Home.login() && (
            <HeaderActionButton
              label="¿Aún no tienes cuenta?"
              text="Resgistrarse"
              onClick={() => history.push(RouteMap.Home.register())}
            />
          )}
          {currentPath === RouteMap.Home.register() && (
            <HeaderActionButton
              label="¿Ya tienes cuenta?"
              text="Iniciar Sesión"
              onClick={() => history.push(RouteMap.Home.login())}
            />
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}
