import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { moneyReducer } from './moneyReducer'
import { stopsReducer } from './Stops'
import { moneyCursReducer } from './CurrentMoneyReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    money: moneyReducer,
    stops: stopsReducer,
    Curs: moneyCursReducer,
})

export type RootState = ReturnType<typeof rootReducer>
