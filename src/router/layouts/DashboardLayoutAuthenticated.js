import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { RouteMap } from '../../constants/RouteMap'
import { withAuthentication } from '../../hoc/withAuthentication'
import { PortalScreen } from '../../components/screens/portal/PortalScreen'
import { WorkshopsScreen } from '../../components/screens/workshops/WorkshopsScreen'
import { ComunitiesScreen } from '../../components/screens/comunities/ComunitiesScreen'
import { ContentCreatorsScreen } from '../../components/screens/content-creators/ContentCreatorsScreen'

const DashboardLayout = () => (
  <Switch>
    <Route exact path={RouteMap.Portal.home()} component={PortalScreen} />
    <Route
      exact
      path={RouteMap.Portal.workshops()}
      component={WorkshopsScreen}
    />
    <Route
      exact
      path={RouteMap.Portal.comunities()}
      component={ComunitiesScreen}
    />
    <Route
      exact
      path={RouteMap.Portal.contentCreators()}
      component={ContentCreatorsScreen}
    />
    <Redirect to={RouteMap.Portal.home()} />
  </Switch>
)

export const DashboardLayoutAuthenticated = withAuthentication(DashboardLayout)
