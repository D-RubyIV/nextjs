export type AppConfig = {
    apiPrefix: string
    unAuthenticatedEntryPath: string
    locale: string
}

const appConfig: AppConfig = {
    apiPrefix: 'https://ph4ntoms.org/gateway',
    // apiPrefix: 'http://localhost:8222/gateway',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
}

export default appConfig