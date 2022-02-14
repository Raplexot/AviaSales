import React, { FC, useState, useEffect, Component } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchUsers } from '../../store/action-creator/user'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'

interface Props{
price:object
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Ticket = ({
    price:{}
}:Props) => {
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
}
export default Ticket
