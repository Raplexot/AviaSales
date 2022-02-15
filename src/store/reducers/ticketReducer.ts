import {
    TicketAction,
    TicketActionTypes,
    TicketState,
} from '../../types/tickets'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
}


export const ticketReducer = (
    state = initialState,
    action: TicketAction
): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return { loading: true, error: null, tickets: [] }
            
        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return { loading: false, error: null, tickets: action.payload }
            
        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return { loading: false, error: action.payload, tickets: [] }
            
        default:
            return state
    }
}


