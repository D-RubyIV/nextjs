import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@/store/rootReducer'
import reducers, { SLICE_NAME, BlogState } from './slice'

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
    [SLICE_NAME]: {
        data: BlogState
    }
}
> = useSelector

export * from './slice'
export { useAppDispatch } from '@/store/hook'
export default reducer