import {
    MoneyAction,
    MoneyActionTypes,
    MoneyState,
    UserAction,
    UserActionTypes,
    UserState,
} from '../../types/users'

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}
const initialStateMoney: MoneyState = {
    money: {},
    moneyloading: false,
    moneyerror: null,
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
            break
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
            break
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
            break
        default:
            return state
    }
}

export const moneyReducer = (
    state = initialStateMoney,
    action: MoneyAction
): MoneyState => {
    switch (action.type) {
        case MoneyActionTypes.FETCH_MONEY:
            return { moneyloading: true, moneyerror: null, money: {} }
            break
        case MoneyActionTypes.FETCH_MONEY_SUCCESS:
            return { moneyloading: false, moneyerror: null, money: action.payload }
            break
        case MoneyActionTypes.FETCH_MONEY_ERROR:
            return { moneyloading: false, moneyerror: action.payload, money: {} }
            break
        default:
            return state
    }
}
