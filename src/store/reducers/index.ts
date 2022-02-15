import { combineReducers, createStore } from 'redux'
import { ticketReducer } from './ticketReducer'
import { moneyReducer } from './moneyReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    money: moneyReducer,
})

export type RootState = ReturnType<typeof rootReducer>
