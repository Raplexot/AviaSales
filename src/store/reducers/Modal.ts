import { FormActionType, ModalState, ModalAction } from '../../types/tickets'

const initialState: ModalState = {
    formModal: false,
    successModal: false,
}

export const formsReducer = (
    state = initialState,
    action: ModalAction
): ModalState => {
    switch (action.type) {
        case FormActionType.ACTIVE_FORM:
            return { formModal: action.payload, successModal: action.payload }
        case FormActionType.ACTIVE_SUCCESS:
            return { formModal: action.payload, successModal: action.payload1 }
        default:
            return state
    }
}
