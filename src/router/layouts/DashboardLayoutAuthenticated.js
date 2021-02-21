import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { DashboardScreen } from '../../components/screens/dashboard/DashboardScreen'
import { RouteMap } from '../../constants/RouteMap'
import { withAuthentication } from '../../hoc/withAuthentication'

const DashboardLayout = () => (
  <Switch>
    <Route exact path={RouteMap.Portal.root()} component={DashboardScreen} />
    <Redirect to={RouteMap.Auth.root()} />
  </Switch>
)

export const DashboardLayoutAuthenticated = withAuthentication(DashboardLayout)
