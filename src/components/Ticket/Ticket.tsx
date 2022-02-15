import React, { FC, useState, useEffect, Component } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchUsers } from '../../store/action-creator/user'
import { useActions, useActionsMoney } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'
import { fetchMoney } from '../../store/action-creator/money'

interface Prop {
    i: string
    moneys: string
}

type OnlyStrings={
    [key:string]:number;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Ticket = ({ i = '', moneys = 'RUB' }: Prop) => {
    const { users, error, loading } = useTypedSelector(
        (state: RootState) => state.user
    )
    
    const { money, moneyerror, moneyloading } = useTypedSelector(
        (state: RootState) => state.money
    )
const USD = money as OnlyStrings;
    const { fetchUsers } = useActions()
    const { fetchMoney } = useActionsMoney()
    console.log(USD.RUB)
    useEffect(() => {
        fetchMoney()
        
    }, [])
    useEffect(() => {
        fetchUsers()
    }, [])

    if (moneyloading) {
        return <h1>Loading</h1>
    }
    if (moneyerror) {
        return <h1>{moneyerror}</h1>
    }
    if (loading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    console.log(moneys)
    if ((i == '')||(i=='-1')) {
        users.sort((obj1: { price: string }, obj2: { price: string }) =>
            obj1.price > obj2.price ? 1 : -1
        )
    }
    else {
        users.sort((obj1: { price: string }, obj2: { price: string }) =>
            obj1.price > obj2.price ? 1 : -1
        )
// console.log(money.moneys)
        const g = users.filter((ticket) => ticket.stops == i)
        return (
            <ul>
                {g.map((user: any) => (
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
                            rate = {USD[moneys]}
                            moneys ={moneys}

                        />
                    </li>
                ))}
            </ul>
        )
    }


    //  const g = users.forEach((item)=>{item.price = item.price*USD[moneys]
    //     return (+item.price).toFixed(0) })
    return (
        <ul>
            {users.map((user: any, ind) => (
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
                        rate = {USD[moneys]}
                        moneys ={moneys}
                    />
                </li>
            ))}
        </ul>
    )
}
export default Ticket
