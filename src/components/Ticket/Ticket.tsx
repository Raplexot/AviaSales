import React, { FC, useState, useEffect, Component } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchUsers } from '../../store/action-creator/user'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'

const Ticket: FC = () => {
    const { users, error, loading } = useTypedSelector(
        (state: RootState) => state.user
    )
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    console.log(users)
    users.sort((obj1: { price: string }, obj2: { price: string }) =>
        obj1.price > obj2.price ? 1 : -1
    )
    return (
        <ul>
            {users.map((user: any) => (
                // eslint-disable-next-line react/jsx-key
                <li style={{ listStyleType: 'none' }}>
                    <TicketsRender
                        origin={user.origin}
                        origin_name={user.origin_name}
                        destination={user.destination}
                        destination_name={user.destination_name}
                        departure_date={user.departure_date}
                        departure_time={user.departure_time}
                        arrival_date={user.arrival_date}
                        arrival_time={user.arrival_time}
                        carrier={user.carrier}
                        stops={user.stops}
                        price={user.price}
                    />
                </li>
            ))}
        </ul>
    )
    //     const [error, setError] = useState(null);
    //     const [isLoaded, setIsLoaded] = useState(false);
    //     const [items, setItems] = useState([{ origin: '', origin_name: '', destination: '', destination_name: '', departure_date: '', departure_time: '', arrival_date: '', arrival_time: '', carrier: '', stops: '', price: '' }]);

    //     useEffect(() => {

    //         fetch(
    //             'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
    //         )
    //             .then((res) => res.json())
    //             .then(
    //                 (result) => {
    //                     setIsLoaded(true);
    //                     setItems(result.tickets.sort((obj1: { price: string }, obj2: { price: string }) =>
    //                         obj1.price > obj2.price ? 1 : -1
    //                     ))

    //                 },
    //                 (error) => {
    //                     setIsLoaded(true);
    //                     setError(error);
    //                 }
    //             )

    //     })

    //     if (error) {
    //         return <p>Error {error["message"]}</p>
    //     }else if (!isLoaded){
    //         return <p>loading...</p>
    //     } else {
    //         return (
    //             <ul>
    //                 {items.pma((item: any, ind) => (
    //                     <li key={ind}><TicketsRender   /></li>
    //                 ))}
    //             </ul>
    //         )
    //     }

    // }

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    // origin={item.origin} origin_name={item.origin_name} destination={item.destination} destination_name={item.destination_name} departure_date={item.departure_date} departure_time={item.departure_time} arrival_date={item.arrival_date} arrival_time={item.arrival_time} carrier={item.carrier} stops={item.stops} price={item.price}

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
    //  export default connect(mapStateToProps,mapDispatchToProps)(Ticket);
}
export default Ticket
