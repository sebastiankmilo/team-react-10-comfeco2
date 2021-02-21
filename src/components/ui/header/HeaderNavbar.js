import React, { useCallback } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Nav } from 'reactstrap'

import { Flex } from '../common/Flex'
import { useContextDispatch } from '../../../hooks'
import { HeaderActionsButton } from './HeaderActionsButton'
import { RouteMap } from '../../../constants/RouteMap'
import * as AuthAction from '../../../actions/AuthAction'

export const HeaderNavbar = () => {
  const history = useHistory()
  const dispatch = useContextDispatch()

  const redirectTo = (url) => () => history.push(url)

  const logout = useCallback(() => {
    dispatch(AuthAction.logoutAuth())
  }, [dispatch])

  return (
    <Flex
      tag={Nav}
      align="center"
      justify="center"
      className="w-100 justify-content-md-end ml-auto flex-row"
    >
      <Switch>
        <Route exact path={RouteMap.Home.login()}>
          <HeaderActionsButton
            label="¿Aún no tienes cuenta?"
            text="Resgistrarse"
            onClick={redirectTo(RouteMap.Home.register())}
          />
        </Route>
        <Route exact path={RouteMap.Home.forgot()}>
          <HeaderActionsButton
            label="¿Aún no tienes cuenta?"
            text="Resgistrarse"
            onClick={redirectTo(RouteMap.Home.register())}
          />
        </Route>
        <Route exact path={RouteMap.Home.register()}>
          <HeaderActionsButton
            label="¿Ya tienes cuenta?"
            text="Iniciar Sesión"
            onClick={redirectTo(RouteMap.Home.login())}
          />
        </Route>
        <Route path={RouteMap.Dashboard.root()}>
          <HeaderActionsButton text="Cerrar Sesión" onClick={logout} />
        </Route>
      </Switch>
    </Flex>
  )
}
