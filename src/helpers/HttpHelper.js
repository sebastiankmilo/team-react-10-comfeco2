const baseUrl = process.env.REACT_APP_API_URL

const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
}

export const get = async (endpoint, requestConfig = {}, isAuth = false) => {
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Get,
    },
    requestConfig,
    isAuth,
  )
}

export const post = async (
  endpoint,
  body,
  requestConfig = {},
  isAuth = false,
) => {
  const config = body ? { body } : undefined
  return _request(
    {
      url: endpoint,
      method: RequestMethod.POST,
    },
    {
      ...config,
      ...requestConfig,
    },
    isAuth,
  )
}

export const put = async (
  endpoint,
  body,
  requestConfig = {},
  isAuth = false,
) => {
  const config = body ? { body } : undefined
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Put,
    },
    {
      ...config,
      ...requestConfig,
    },
    isAuth,
  )
}

export const del = async (endpoint, requestConfig = {}, isAuth = false) => {
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Delete,
    },
    requestConfig,
  )
}

const _request = async (restRequest, config, isAuth) => {
  if (!Boolean(restRequest.url)) {
    throw new Error('La url es obligatoria')
  }

  try {
    let authConfigHeader = {}

    if (isAuth) {
      const token = localStorage.getItem('token') || ''
      authConfigHeader = { 'x-token': token }
    }
    const requestConfig = {
      ...config,
      method: restRequest.method,
      headers: {
        ...config.headers,
        ...authConfigHeader,
        'Content-type': 'application/json',
      },
    }

    const request = await fetch(restRequest.url, requestConfig)
    const response = await request.json()
    if (!response.ok) {
      return { status: response.status, message: response.msg, error: true }
    }
    return { ...response, error: false }
  } catch (error) {
    // TODO: necesario conocer lo que contiene una respuesta en el caso de un error <400
    console.log(error)
    return {
      status: 0,
      message: error.msg || 'Error al hacer la solicitud',
      error: true,
    }
  }
}

export const fetchWithOutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  if (method === 'GET') return fetch(url)
  else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}

export const fetchWithToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''
  if (method === 'GET')
    return fetch(url, {
      method,
      headers: {
        'x-token': token,
      },
    })
  else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    })
  }
}
