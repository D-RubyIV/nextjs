import { combineReducers,  UnknownAction, Reducer } from 'redux'
import auth, { AuthState } from './slices/auth/'
import RtkQueryService from '@/services/RtkQueryService'

export type RootState = {
    auth: AuthState
    /* eslint-disable @typescript-eslint/no-explicit-any */
    [RtkQueryService.reducerPath]: any
}

export interface AsyncReducers {
    [key: string]: Reducer<any, UnknownAction>
}

const staticReducers = {
    auth,
    [RtkQueryService.reducerPath]: RtkQueryService.reducer,
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
    (state: RootState, action: UnknownAction) => {
        const combinedReducer = combineReducers({
            ...staticReducers,
            ...asyncReducers,
        })
        return combinedReducer(state, action)
    }

export default rootReducer