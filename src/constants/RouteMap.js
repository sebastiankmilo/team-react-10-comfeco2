const homeRoot = '/'

const authRoot = `${homeRoot}auth`
const authRoutes = {
  Auth: {
    root: () => authRoot,
    login: () => `${authRoot}/iniciar-sesion`,
    forgot: () => `${authRoot}/recuperar-contrasena`,
    register: () => `${authRoot}/registro`,
    terms: () => `${authRoot}terminos-condiciones`,
  },
}

const portalRoot = `${homeRoot}portal`
const portalRoutes = {
  Portal: {
    root: () => portalRoot,
    comunities: () => `${portalRoot}/comunidades`,
    home: () => `${portalRoot}/inicio`,
    workshops: () => `${portalRoot}/talleres`,
    contentCreators: () => `${portalRoot}/creadores-contenido`,
    exampleWithParams: (param = ':param') => `${portalRoot}/edit/${param}`,
  },
}

export const RouteMap = {
  ...portalRoutes,
  ...authRoutes,
}
