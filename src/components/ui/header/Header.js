import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Container, Media, Nav, Navbar, NavbarBrand } from 'reactstrap'
import LogoComplete from '../../../assets/img/logo-complete.svg'
import { RouteMap } from '../../../constants/RouteMap'
import { Flex } from '../common/Flex'
import { HeaderActionButton } from './HeaderActionButton'
export const Header = () => {
  const { pathname: currentPath } = useLocation()
  const history = useHistory()
  return (
    <Navbar color="faded" light expand="md" className="header">
      <Container>
        <Flex justify="center" className="w-100 justify-content-md-start">
          <NavbarBrand tag={Link} to={RouteMap.Home.root()}>
            <Media src={LogoComplete} height="50" alt="Logo completo" />
          </NavbarBrand>
        </Flex>
        <Flex
          tag={Nav}
          align="center"
          justify="center"
          className="w-100 justify-content-md-end ml-auto flex-row"
        >
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
        </Flex>
      </Container>
    </Navbar>
  )
}
