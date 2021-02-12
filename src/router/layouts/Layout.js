import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { DashboardLayoutAuthenticated } from './DashboardLayoutAuthenticated'
import { RouteMap } from '../../constants/RouteMap'
import { Content } from './components/content/Content'
import { Header } from './components/header/Header'
import { HomeScreen } from '../../components/screens/home/HomeScreen'
import { Footer } from './components/footer/Footer'

export const Layout = () => (
  <>
    <Header />
    <Content>
      <Switch>
        <Route exact path={RouteMap.Home.root()} component={HomeScreen} />
        <Route component={DashboardLayoutAuthenticated} />
      </Switch>
    </Content>
    <Footer />
  </>
)
