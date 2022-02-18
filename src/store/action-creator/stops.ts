import { Dispatch } from 'react'
import { stopsAction, StopsActionType } from '../../types/tickets'

export const getStops = (stops: number) => {
    return async (dispatch: Dispatch<stopsAction>) => {
        dispatch({ type: StopsActionType.GET_STOPS, payload: stops })
    }
}
