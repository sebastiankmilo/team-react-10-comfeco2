import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar } from '../../components/ui/Navbar'

import { LoginScreen } from '../../components/auth/LoginScreen'
import { RecoveryScreen } from '../../components/auth/RecoveryScreen'
import { RouteMap } from '../../constants/RouteMap'
import { Col, Row } from 'antd'
import { DashboardLayoutAuthenticated } from './DashboardLayoutAuthenticated'

export const Layout = () => (
  <>
    <Navbar />
    <Row justify="center" align="middle" className="layout_content">
      <Col>
        <Switch>
          <Route exact path={RouteMap.Home.login()} component={LoginScreen} />
          <Route
            exact
            path={RouteMap.Home.forgot()}
            component={RecoveryScreen}
          />
          <Route component={DashboardLayoutAuthenticated} />
        </Switch>
      </Col>
    </Row>
  </>
)
