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
  },
}

export const RouteMap = {
  ...homeRoutes,
  ...dashboardRoutes,
}
