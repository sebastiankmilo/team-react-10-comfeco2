/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi) {
  return {
    api: {
      users: { update: `${baseApi}/users` },
    },
    auth: {
      login: `${baseApi}/auth/login`,
      register: `${baseApi}/auth`,
      recovery: `${baseApi}/auth/recovery`,
      refresh: `${baseApi}/auth/renew`,
    },
    isProduction: true,
    isDevelopment: false,
  }
}
