export interface TicketState {
    tickets: IntTickets
    loading: boolean
    error: null | string
}
export interface stopsState {
    stops: IntStops
}

export interface ModalState {
    formModal: boolean
    successModal: boolean
}

export interface MoneyState {
    money: IntMoney
    moneyLoading: boolean
    moneyError: null | string
}

export interface MoneyCursState {
    moneyCurs: string
}

export type IntMoney = {
    [key: string]: number
}

export enum TicketActionTypes {
    FETCH_TICKETS = 'FETCH_TICKETS',
    FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
    FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}
export enum StopsActionType {
    DO_STOPS = 'DO_STOPS',
}

export enum FormActionType {
    ACTIVE_FORM = 'ACTIVE_FORM',
    ACTIVE_SUCCESS = 'ACTIVE_SUCCESS',
}

export enum MoneyCursActionType {
    DO_MONEY = 'DO_MONEY',
}

export interface cursAction {
    type: MoneyCursActionType.DO_MONEY
    payload: string
}

export interface stopsAction {
    type: StopsActionType.DO_STOPS
    payload: number
}

export interface modalAction {
    type: FormActionType.ACTIVE_FORM
    payload: boolean
    payload1: boolean
}
export interface SuccessAction {
    type: FormActionType.ACTIVE_SUCCESS
    payload: boolean
    payload1: boolean
}

export type ModalAction = SuccessAction | modalAction

type IntStops = Array<number>

interface FetchTicketsAction {
    type: TicketActionTypes.FETCH_TICKETS
}
interface FetchTicketsSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_SUCCESS
    payload: IntTickets
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
    moneyCurs: string
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

export interface IntTicket {
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

type IntTickets = IntTicket[]
