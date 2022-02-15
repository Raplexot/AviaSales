import React, { useEffect } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions, useActionsMoney } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'

import { IntMoney } from '../../types/tickets'

interface Prop {
    stopsprops: number
    moneys: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Ticket = ({ stopsprops = 0, moneys = 'RUB' }: Prop) => {
    const { tickets, error, loading } = useTypedSelector(
        (state: RootState) => state.ticket
    )

    const { money, moneyError, moneyLoading } = useTypedSelector(
        (state: RootState) => state.money
    )
    const USD = money as IntMoney
    const { fetchTickets } = useActions()
    const { fetchMoney } = useActionsMoney()

    useEffect(() => {
        fetchMoney()
        fetchTickets()
    }, [])

    if (moneyLoading || loading) {
        return <h1>Loading</h1>
    }
    if (moneyError || error) {
        return <h1>{error}</h1>
    }

    if (stopsprops == -1) {
        tickets.sort((obj1, obj2) => (obj1.price > obj2.price ? 1 : -1))
    } else {
        tickets.sort((obj1, obj2) => (obj1.price > obj2.price ? 1 : -1))

        const g = tickets.filter((ticket) => ticket.stops == stopsprops)
        return (
            <ul>
                {g.map((ticket, ind) => (
                    <li key={ind} style={{ listStyleType: 'none' }}>
                        <TicketsRender
                            ticket={ticket}
                            curs={USD[moneys]}
                            cursName={moneys}
                        />
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul>
            {tickets.map((ticket, ind) => (
                <li key={ind} style={{ listStyleType: 'none' }}>
                    <TicketsRender
                        ticket={ticket}
                        curs={USD[moneys]}
                        cursName={moneys}
                    />
                </li>
            ))}
        </ul>
    )
}
export default Ticket
