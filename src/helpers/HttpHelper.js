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

const _getBodyConfig = (body) =>
  !!body ? { body: JSON.stringify(body) } : undefined

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

export const getAuth = async (endpoint, requestConfig = {}) => {
  return get(endpoint, requestConfig, true)
}

export const post = async (
  endpoint,
  body,
  requestConfig = {},
  isAuth = false,
) => {
  const config = _getBodyConfig(body)
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Post,
    },
    {
      ...config,
      ...requestConfig,
    },
    isAuth,
  )
}

export const postAuth = async (endpoint, body, requestConfig = {}) => {
  return post(endpoint, body, requestConfig, true)
}

export const put = async (
  endpoint,
  body,
  requestConfig = {},
  isAuth = false,
) => {
  const config = _getBodyConfig(body)
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

export const putAuth = async (endpoint, body, requestConfig = {}) => {
  return put(endpoint, body, requestConfig, true)
}

export const del = async (endpoint, requestConfig = {}, isAuth = false) => {
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Delete,
    },
    requestConfig,
    isAuth,
  )
}

export const delAuth = async (endpoint, requestConfig = {}) => {
  return del(endpoint, requestConfig, true)
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
    const { ok, ...rest } = response
    return { ...rest, error: false }
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
