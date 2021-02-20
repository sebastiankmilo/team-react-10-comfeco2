import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { RouteMap } from '../constants/RouteMap'
import { useAuthState } from '../hooks'

export const withAuthentication = (OriginalComponent) => {
  const UpdatedComponent = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState(RouteMap.Home.login())
    const { uid } = useAuthState()

    if (!uid || redirect) {
      return <Redirect to={redirectUrl} />
    }

    return (
      <OriginalComponent
        setRedirectUrl={setRedirectUrl}
        {...props}
        setRedirect={setRedirect}
      />
    )
  }

  return UpdatedComponent
}
