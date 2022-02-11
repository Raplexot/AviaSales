import { combineReducers, createStore } from 'redux'
import { moneyReducer, userReducer } from './userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    money: moneyReducer,
})

export type RootState = ReturnType<typeof rootReducer>
