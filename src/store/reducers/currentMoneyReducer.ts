import {
    currencyAction,
    MoneyCurrencyActionType,
    MoneyCurrencyState,
} from '../../types/tickets'

const initialStateCurrencyMoney: MoneyCurrencyState = {
    moneyCurrency: 'RUB',
}
export const moneyCursReducer = (
    state = initialStateCurrencyMoney,
    action: currencyAction
): MoneyCurrencyState => {
    switch (action.type) {
        case MoneyCurrencyActionType.GET_CURRENCY:
            return { moneyCurrency: action.payload }

        default:
            return state
    }
}
