import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { moneyReducer } from './moneyReducer'
import { stopsReducer } from './Stops'
import { moneyCursReducer } from './CurrentMoneyReducer'
import { formsReducer } from './Modal'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    money: moneyReducer,
    stops: stopsReducer,
    Curs: moneyCursReducer,
    modal: formsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
