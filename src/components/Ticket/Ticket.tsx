import React, { useEffect, useMemo } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions, useActionsMoney } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'

import { IntMoney } from '../../types/tickets'

const Ticket = (): JSX.Element => {
    const { tickets, error, loading } = useTypedSelector(
        (state: RootState) => state.ticket
    )
    const stops = useTypedSelector((state) => state.stops)
    const Curs = useTypedSelector((state) => state.Curs)
    const { money, moneyError, moneyLoading } = useTypedSelector(
        (state: RootState) => state.money
    )
    const USD = money as IntMoney
    const { fetchTickets } = useActions()
    const { fetchMoney } = useActionsMoney()
    useEffect(() => {
        fetchMoney(Curs.moneyCurs)
        fetchTickets()
        tickets.filter((ticket) => stops.stops.includes(ticket.stops))
    }, [stops, Curs])

    const Memo = useMemo(
        () =>
            stops.stops.includes(-1)
                ? tickets
                : tickets.filter((ticket) =>
                      stops.stops.includes(ticket.stops)
                  ),
        [tickets]
    )
    if (moneyLoading || loading) {
        return <h1>Loading</h1>
    }
    if (moneyError || error) {
        return <h1>{error && moneyError}</h1>
    }

    return (
        <ul>
            {Memo.map((ticket, ind) => (
                <li key={ind} style={{ listStyleType: 'none' }}>
                    <TicketsRender
                        ticket={ticket}
                        curs={USD[Curs.moneyCurs]}
                        cursName={Curs.moneyCurs}
                    />
                </li>
            ))}
        </ul>
    )
}
export default Ticket
