import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { moneyReducer } from './moneyReducer'
import { stopsReducer } from './stops'
import { moneyCursReducer } from './currentMoneyReducer'
import { formsReducer } from './modal'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    money: moneyReducer,
    stops: stopsReducer,
    currency: moneyCursReducer,
    modal: formsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
