import { Dispatch } from 'react'
import { ModalAction, FormActionType } from '../../types/tickets'

export function show(bool: boolean, bool1: boolean) {
    return async (dispatch: Dispatch<ModalAction>) => {
        dispatch({
            type: FormActionType.ACTIVE_FORM,
            payload: bool,
            payload1: bool1,
        })
        dispatch({
            type: FormActionType.ACTIVE_SUCCESS,
            payload: bool,
            payload1: bool1,
        })
    }
}
