import { Dispatch } from 'react'
import { currencyAction, MoneyCurrencyActionType } from '../../types/tickets'

export const getMoney = (moneyCurrency: string) => {
    return async (dispatch: Dispatch<currencyAction>) => {
        dispatch({
            type: MoneyCurrencyActionType.GET_CURRENCY,
            payload: moneyCurrency,
        })
    }
}
