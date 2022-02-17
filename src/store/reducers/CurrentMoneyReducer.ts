import {
    cursAction,
    MoneyCursActionType,
    MoneyCursState,
} from '../../types/tickets'

const initialStateCursMoney: MoneyCursState = {
    moneyCurs: 'RUB',
}
export const moneyCursReducer = (
    state = initialStateCursMoney,
    action: cursAction
): MoneyCursState => {
    switch (action.type) {
        case MoneyCursActionType.DO_MONEY:
            return { moneyCurs: action.payload }

        default:
            return state
    }
}
