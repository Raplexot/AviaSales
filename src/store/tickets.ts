import { makeAutoObservable, runInAction } from 'mobx'
import { IntTicket, TicketState, IntTickets } from '../types/tickets'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
}

class TicketConstructor {
    tickets: IntTickets = initialState.tickets

    loading: boolean = initialState.loading

    error: string | null = initialState.error

    constructor() {
        makeAutoObservable(this)
    }

    getTicket(): void {
        this.loading = true
        try {
            fetch(
                'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
            )
                .then((res) => res.json())
                .then((json) => {
                    runInAction(() => {
                        this.tickets = [
                            ...json.tickets.sort(
                                (obj1: IntTicket, obj2: IntTicket) =>
                                    obj1.price > obj2.price ? 1 : -1,
                                this.loading = false
                            ),
                        ]
                    })
                })
        } catch (error) {
            console.log(error)
            this.loading = false
            this.error = 'Error of loading'
        }
    }
}
export default new TicketConstructor()
