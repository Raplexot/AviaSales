import { MoneyAction, MoneyActionTypes, MoneyState } from '../../types/tickets'

const initialStateMoney: MoneyState = {
    money: {},
    moneyLoading: false,
    moneyError: null,
}
export const moneyReducer = (
    state = initialStateMoney,
    action: MoneyAction
): MoneyState => {
    switch (action.type) {
        case MoneyActionTypes.FETCH_MONEY:
            return { moneyLoading: true, moneyError: null, money: {} }

        case MoneyActionTypes.FETCH_MONEY_SUCCESS:
            return {
                moneyLoading: false,
                moneyError: null,
                money: action.payload,
            }

        case MoneyActionTypes.FETCH_MONEY_ERROR:
            return {
                moneyLoading: false,
                moneyError: action.payload,
                money: {},
            }

        default:
            return state
    }
}
