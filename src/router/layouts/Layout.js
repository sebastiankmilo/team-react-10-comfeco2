import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RouteMap } from '../../constants/RouteMap'
import { Header } from '../../components/ui/header/Header'
import { Footer } from '../../components/ui/footer/Footer'
import { Content } from '../../components/ui/content/Content'
import { DashboardLayoutAuthenticated } from './DashboardLayoutAuthenticated'
import { RegisterScreen } from '../../components/screens/auth/RegisterScreen'
import { ForgotScreen } from '../../components/screens/auth/ForgotScreen'
import { LoginScreen } from '../../components/screens/auth/LoginScreen'
import { useVerifyLoginEffect } from 'hooks'

export const Layout = () => {
  useVerifyLoginEffect()
  return (
    <div className="layout">
      <Header />
      <Content>
        <Switch>
          <Route exact path={RouteMap.Home.login()} component={LoginScreen} />
          <Route
            exact
            path={RouteMap.Home.register()}
            component={RegisterScreen}
          />
          <Route exact path={RouteMap.Home.forgot()} component={ForgotScreen} />
          <Route component={DashboardLayoutAuthenticated} />
        </Switch>
      </Content>
      <Footer />
    </div>
  )
}
