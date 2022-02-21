import { stopsState, IntStops } from '../../types/tickets'
import {makeAutoObservable} from "mobx"

const initialState: stopsState = {
    stops: [-1],
}



class Stops{

    stops:IntStops=initialState.stops

    constructor(){
        makeAutoObservable(this)
    }

    getStops = (stop: number):void => {
    this.stops = this.stops.includes(stop)?
    this.stops.filter(el=>el !== stop && el !==-1):[...this.stops,stop]
    }
}
export default new Stops();

