import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { RouteMap } from '../constants/RouteMap'
import { useAppContext } from '../hooks'

export const withAuthentication = (OriginalComponent) => {
  const UpdatedComponent = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState(RouteMap.Home.root())
    const { state } = useAppContext()
    const { uid } = state.auth

    console.log(uid)
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
