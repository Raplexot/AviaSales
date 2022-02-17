import {
    TicketAction,
    TicketActionTypes,
    TicketState,
} from '../../types/tickets'

const initialState: TicketState = {
    tickets: [],
    stops: [],
    loading: false,
    error: null,
}

export const ticketReducer = (
    state = initialState,
    action: TicketAction
): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return { loading: true, error: null, tickets: [], stops: [] }

        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return {
                loading: false,
                error: null,
                tickets: action.payload,
                stops: action.stopsprops,
            }

        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return {
                loading: false,
                error: action.payload,
                tickets: [],
                stops: [],
            }

        default:
            return state
    }
}
