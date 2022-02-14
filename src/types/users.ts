export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

export interface MoneyState {
    money: object
    moneyloading: boolean
    moneyerror: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export enum MoneyActionTypes {
    FETCH_MONEY = 'FETCH_MONEY',
    FETCH_MONEY_SUCCESS = 'FETCH_MONEY_SUCCESS',
    FETCH_MONEY_ERROR = 'FETCH_MONEY_ERROR',
}

interface FetchMoneyAction {
    type: MoneyActionTypes.FETCH_MONEY
}
interface FetchMoneySuccessAction {
    type: MoneyActionTypes.FETCH_MONEY_SUCCESS
    payload: object
}
interface FetchMoneyErrorAction {
    type: MoneyActionTypes.FETCH_MONEY_ERROR
    payload: string
}

export type MoneyAction =
    | FetchMoneyAction
    | FetchMoneyErrorAction
    | FetchMoneySuccessAction

export type UserAction =
    | FetchUsersAction
    | FetchUsersErrorAction
    | FetchUsersSuccessAction
