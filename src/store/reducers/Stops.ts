import { StopsActionType, stopsState, stopsAction } from '../../types/tickets'

const initialState: stopsState = {
    stops: [],
}

export const stopsReducer = (
    state = initialState,
    action: stopsAction
): stopsState => {
    switch (action.type) {
        case StopsActionType.DO_STOPS:
            return { stops: action.payload }
        default:
            return state
    }
}
