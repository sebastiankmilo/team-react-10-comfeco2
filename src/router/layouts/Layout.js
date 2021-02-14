import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RouteMap } from '../../constants/RouteMap'
import { Header } from '../../components/ui/header/Header'
import { Footer } from '../../components/ui/footer/Footer'
import { Content } from '../../components/ui/content/Content'
import { DashboardLayoutAuthenticated } from './DashboardLayoutAuthenticated'
import { RegisterScreen } from '../../components/screens/auth/RegisterScreen'

export const Layout = () => (
  <div className="app layout">
    <Header />
    <Content>
      <Switch>
        <Route
          exact
          path={RouteMap.Home.login()}
          component={() => <h1>Login</h1>}
        />
        <Route
          exact
          path={RouteMap.Home.register()}
          component={RegisterScreen}
        />
        <Route component={DashboardLayoutAuthenticated} />
      </Switch>
    </Content>
    <Footer />
  </div>
)
