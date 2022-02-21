import { Dispatch } from 'react'
import { ModalActions, FormActionType } from '../../types/tickets'

export function show(bool: boolean[]) {
    return async (dispatch: Dispatch<ModalActions>) => {
        dispatch({
            type: FormActionType.ACTIVE_FORM,
            payload: bool,
        })
    }
}



