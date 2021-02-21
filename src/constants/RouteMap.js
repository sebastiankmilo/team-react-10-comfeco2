const homeRoot = '/'

const authRoot = `${homeRoot}auth`
const authRoutes = {
  Auth: {
    root: () => authRoot,
    login: () => `${authRoot}/login`,
    forgot: () => `${authRoot}/forgot`,
    register: () => `${authRoot}/register`,
  },
}

const portalRoot = `${homeRoot}portal/`
const portalRoutes = {
  Portal: {
    root: () => portalRoot,
    exampleWithParams: (param = ':param') => `${portalRoot}/edit/${param}`,
  },
}

export const RouteMap = {
  ...authRoutes,
  ...portalRoutes,
}
