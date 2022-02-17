import axios from 'axios'
import { Dispatch } from 'react'
import { IntTicket, TicketAction, TicketActionTypes } from '../../types/tickets'

export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({ type: TicketActionTypes.FETCH_TICKETS })
            const response = await axios.get(
                'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
            )
            response.data.tickets.sort((obj1: IntTicket, obj2: IntTicket) =>
                obj1.price > obj2.price ? 1 : -1
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
