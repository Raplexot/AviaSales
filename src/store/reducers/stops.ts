import { StopsActionType, stopsState, stopsAction } from '../../types/tickets'

const initialState: stopsState = {
    stops: [-1],
}

export const stopsReducer = (
    state = initialState,
    action: stopsAction
): stopsState => {
    switch (action.type) {
        case StopsActionType.GET_STOPS:
            return {
                stops: state.stops.includes(action.payload)
                    ? state.stops.filter((el) => el !== action.payload)
                    : [...state.stops, action.payload],
            }
        default:
            return state
    }
}
