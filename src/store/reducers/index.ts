import { combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
