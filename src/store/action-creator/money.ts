import axios from 'axios'
import { Dispatch } from 'react'
import { MoneyAction, MoneyActionTypes } from '../../types/users'

export const fetchMoney = () => {
    return async (dispatch: Dispatch<MoneyAction>) => {
        try {
            dispatch({ type: MoneyActionTypes.FETCH_MONEY })
            const response = await axios.get(
                "https://open.er-api.com/v6/latest/RUB"
            )
            dispatch({
                type: MoneyActionTypes.FETCH_MONEY_SUCCESS,
                payload: response.data.rates,
            })
        } catch (e) {
            dispatch({
                type: MoneyActionTypes.FETCH_MONEY_ERROR,
                payload: 'Error of dounload',
            })
        }
    }
}
