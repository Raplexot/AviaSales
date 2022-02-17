import { Dispatch } from 'react'
import { cursAction, MoneyCursActionType } from '../../types/tickets'

export const getMoney = (moneyCurs: string) => {
    return async (dispatch: Dispatch<cursAction>) => {
        dispatch({ type: MoneyCursActionType.DO_MONEY, payload: moneyCurs })
    }
}
