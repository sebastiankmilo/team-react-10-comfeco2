import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { RouteMap } from '../constants/RouteMap'
import { useAuthState } from '../hooks'

export const withAuthentication = (OriginalComponent) => {
  const UpdatedComponent = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState(RouteMap.Auth.login())
    const { authenticated } = useAuthState()

    if (!authenticated || redirect) {
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
