const homeRoot = '/'

const homeRoutes = {
  Home: {
    root: () => homeRoot,
    login: () => `${homeRoot}login`,
    forgot: () => `${homeRoot}forgot`,
  },
}

const dashboardRoot = `${homeRoot}dashboard`
const dashboardRoutes = {
  Dashboard: {
    root: () => dashboardRoot,
    exampleWithParams: (param = ':param') => `${dashboardRoot}/edit/${param}`,
  },
}

export const RouteMap = {
  ...homeRoutes,
  ...dashboardRoutes,
}