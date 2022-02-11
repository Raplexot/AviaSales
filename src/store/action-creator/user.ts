/* eslint-disable max-len */
import axios from 'axios'
import { Dispatch } from 'react'
import {
    MoneyAction,
    MoneyActionTypes,
    UserAction,
    UserActionTypes,
} from '../../types/users'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get(
                'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
            )
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data.tickets,
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error of dounload',
            })
        }
    }
}

export const fetchMoney = () => {
    return async (dispatch: Dispatch<MoneyAction>) => {
        try {
            dispatch({ type: MoneyActionTypes.FETCH_MONEY })
            const response = await axios.get(
                'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
            )
            dispatch({
                type: MoneyActionTypes.FETCH_MONEY_SUCCESS,
                payload: response.data.tickets,
            })
        } catch (e) {
            dispatch({
                type: MoneyActionTypes.FETCH_MONEY_ERROR,
                payload: 'Error of dounload',
            })
        }
    }
}
