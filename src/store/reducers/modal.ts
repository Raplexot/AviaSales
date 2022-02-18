import { FormActionType, ModalState, ModalActions } from '../../types/tickets'

const initialState: ModalState = {
    modals: [],
}

export const formsReducer = (
    state = initialState,
    action: ModalActions
): ModalState => {
    switch (action.type) {
        case FormActionType.ACTIVE_FORM:
            return { modals: action.payload }
        default:
            return state
    }
}
