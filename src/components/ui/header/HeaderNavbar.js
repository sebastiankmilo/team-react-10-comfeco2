import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { RouteMap } from '../../../constants/RouteMap'
import { HeaderNavbarMenu } from './HeaderNavbarMenu'
import { HeaderActionsButton } from './HeaderActionsButton'

export const HeaderNavbar = () => {
  const history = useHistory()

  const redirectTo = (url) => () => history.push(url)

  return (
    <>
      <Switch>
        <Route path={RouteMap.Portal.root()}>
          <HeaderNavbarMenu />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={RouteMap.Auth.login()}>
          <HeaderActionsButton
            label="¿Aún no tienes cuenta?"
            text="Resgistrarse"
            onClick={redirectTo(RouteMap.Auth.register())}
          />
        </Route>
        <Route exact path={RouteMap.Auth.forgot()}>
          <HeaderActionsButton
            label="¿Aún no tienes cuenta?"
            text="Resgistrarse"
            onClick={redirectTo(RouteMap.Auth.register())}
          />
        </Route>
        <Route exact path={RouteMap.Auth.register()}>
          <HeaderActionsButton
            label="¿Ya tienes cuenta?"
            text="Iniciar Sesión"
            onClick={redirectTo(RouteMap.Auth.login())}
          />
        </Route>
      </Switch>
    </>
  )
}
