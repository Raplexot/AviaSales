import React, { FC, useState, useEffect, Component } from 'react'
import TicketsRender from '../Render/TicketsRender'
import {connect} from 'react-redux'
import axios from 'axios'
import { ticketsFetchData } from '../../actions/tickets'

const Ticket: FC = () => {
    const state: {
        error: null | Error
        isLoaded: boolean
        items: Array<any>
    } = {
        error: null,
        isLoaded: false,
        items: [],
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   
        fetch(
            'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    state.isLoaded = true
                    state.items = result.tickets.sort(
                        (obj1: { price: string }, obj2: { price: string }) =>
                            obj1.price > obj2.price ? 1 : -1
                    )
                },
                (error) => {
                    state.isLoaded = true
                    state.error = error
                }
            )
        console.log(state.isLoaded)
    

    console.log(state.error)
    if (state.error) {
        return <p>Error {state.error['message']}</p>
    } else if (!state.isLoaded) {
        return <p>Loading...</p>
    } else {
   
            return (
            <ul>
                {state.items.map((item) => (
                    <li key={item['name']}>{TicketsRender(item)}</li>
                ))}
            </ul>
          
        )
    }


}

// class Ticket extends Component{
//     // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//     componentDidMount(){
//         // eslint-disable-next-line react/prop-types
//         this.props.fetchData('https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json')
//     }
//     render(){
//         return (
//             <div>
//                 <ul>
//                     {this.props.tickets.map((item)=>{
//                         return <li key={item["name"]}>{TicketsRender(item)}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
// /* eslint-disable @typescript-eslint/explicit-function-return-type */


// const mapStateToProps = state =>{
//     return {tickets:state.tickets};
// };
// const mapDispatchToProps = dispatch =>{
//     return {
//         fetchData:url =>{dispatch(ticketsFetchData(url))}
//     };
// };
export default Ticket
//  export default connect(mapStateToProps,mapDispatchToProps)(Ticket);
