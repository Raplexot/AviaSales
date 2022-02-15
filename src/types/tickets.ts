export interface TicketState {
    tickets: IntTickets
    loading: boolean
    error: null | string
}

export interface MoneyState {
    money: IntMoney
    moneyLoading: boolean
    moneyError: null | string
}

export type IntMoney={
    [key:string]:number;
}

export enum TicketActionTypes {
    FETCH_TICKETS = 'FETCH_TICKETS',
    FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
    FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}

interface FetchTicketsAction {
    type: TicketActionTypes.FETCH_TICKETS
}
interface FetchTicketsSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_SUCCESS
    payload: IntTickets
}
interface FetchTicketsErrorAction {
    type: TicketActionTypes.FETCH_TICKETS_ERROR
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
    payload: IntMoney
}
interface FetchMoneyErrorAction {
    type: MoneyActionTypes.FETCH_MONEY_ERROR
    payload: string
}

export type MoneyAction =
    | FetchMoneyAction
    | FetchMoneyErrorAction
    | FetchMoneySuccessAction

export type TicketAction =
    | FetchTicketsAction
    | FetchTicketsErrorAction
    | FetchTicketsSuccessAction


   

export interface IntTicket{
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: number
    price: number
}


    type IntTickets= IntTicket[]
        