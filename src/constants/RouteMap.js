const homeRoot = '/'

const authRoutes = {
  Auth: {
    root: () => homeRoot,
    login: () => `${homeRoot}login`,
    forgot: () => `${homeRoot}forgot`,
    register: () => `${homeRoot}register`,
  },
}

const portalRoot = `${homeRoot}dashboard`
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
