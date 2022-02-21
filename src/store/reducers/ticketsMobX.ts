import {makeAutoObservable} from 'mobx'
import {
    IntTicket,
    TicketState,
    IntTickets,
} from '../../types/tickets'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
}

class TicketConstructor{

    tickets:IntTickets=initialState.tickets;

    loading:boolean=initialState.loading;

    error:string|null = initialState.error;


    constructor(){
        makeAutoObservable(this);
    }

    getTicket ():void {
        initialState.loading=true;
     fetch('https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json')
    .then(res=>res.json())
    .then(json=>{
    this.tickets=[...json.tickets.sort((obj1: IntTicket, obj2: IntTicket) =>
        obj1.price > obj2.price ? 1 : -1)]
    })
    initialState.loading=false;
    }
}
export default new TicketConstructor();
