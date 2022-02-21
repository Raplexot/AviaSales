export interface TicketState {
    tickets: IntTickets
    loading: boolean
    error: null | string
}
export interface stopsState {
    stops: IntStops
}

export interface ModalState {
    modals: boolean[]
}

export interface MoneyState {
    money: IntMoney
    moneyLoading: boolean
    moneyError: null | string
}

export interface MoneyCurrencyState {
    moneyCurrency: string
}

export type IntMoney = {
    [key: string]: number
}

export type IntStops = Array<number>

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

export type IntTickets = IntTicket[]
