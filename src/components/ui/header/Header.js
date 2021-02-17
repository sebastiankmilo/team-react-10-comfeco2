import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Container, Media, Nav, Navbar, NavbarBrand } from 'reactstrap'
import LogoComplete from '../../../assets/img/logo-complete.svg'
import { RouteMap } from '../../../constants/RouteMap'
import { Flex } from '../common/Flex'
import { HeaderActionButton } from './HeaderActionButton'
import { useAuthReducer } from '../../../hooks'
import * as AuthActions from '../../../actions/AuthActions'

export const Header = () => {
  const history = useHistory()
  const { pathname: currentPath } = useLocation()
  const [{ uid }, dispatch] = useAuthReducer()
  const logout = () => {
    dispatch(AuthActions.logoutAuth())
  }
  const showInLogin =
    currentPath === RouteMap.Home.login() ||
    currentPath === RouteMap.Home.forgot()

  const showInRegister = currentPath === RouteMap.Home.register()

  const showInDashboard = !!uid
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
          {showInLogin && (
            <HeaderActionButton
              label="¿Aún no tienes cuenta?"
              text="Resgistrarse"
              onClick={() => history.push(RouteMap.Home.register())}
            />
          )}
          {showInRegister && (
            <HeaderActionButton
              label="¿Ya tienes cuenta?"
              text="Iniciar Sesión"
              onClick={() => history.push(RouteMap.Home.login())}
            />
          )}
          {showInDashboard && (
            <HeaderActionButton text="Cerrar Sesión" onClick={logout} />
          )}
        </Flex>
      </Container>
    </Navbar>
  )
}
