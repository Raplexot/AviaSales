/* eslint-disable max-len */
import axios from 'axios'
import { Dispatch } from 'react'
import { TicketAction, TicketActionTypes } from '../../types/tickets'

export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({ type: TicketActionTypes.FETCH_TICKETS })
            const response = await axios.get(
                'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
            )
            dispatch({
                type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
                payload: response.data.tickets,
            })
        } catch (e) {
            dispatch({
                type: TicketActionTypes.FETCH_TICKETS_ERROR,
                payload: 'Error of dounload',
            })
        }
    }
}
