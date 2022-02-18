import { useEffect, useMemo } from 'react'
import TicketsRender from '../Render/TicketsRender'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions, useActionsMoney } from '../../hooks/useActions'
import { RootState } from '../../store/reducers'
import FormModal from '../Render/FormModal'
import SuccessModal from '../Render/SuccessModal'
import '../Render/TicketRender.scss'
const Ticket = (): JSX.Element => {
    const { tickets, error, loading } = useTypedSelector(
        (state: RootState) => state.ticket
    )

    const stops = useTypedSelector((state) => state.stops)

    const currency = useTypedSelector((state) => state.currency)

    const { money, moneyError, moneyLoading } = useTypedSelector(
        (state: RootState) => state.money
    )

    const { fetchTickets } = useActions()
    const { fetchMoney } = useActionsMoney()
    
    useEffect(() => {
        fetchMoney(currency.moneyCurrency)
        fetchTickets()
    }, [currency])

    const memo = useMemo(
        () =>
            stops.stops.includes(-1)
                ? tickets
                : tickets.filter((ticket) =>
                      stops.stops.includes(ticket.stops)
                  ),
        [tickets, stops]
    )
    if (moneyLoading || loading) {
        return <h1>Loading</h1>
    }
    if (moneyError || error) {
        return (
            <h1>
                {error} {moneyError}
            </h1>
        )
    }

    return (
        <div className="AllTickets">
            {memo.map((ticket) => (
                <div key={Math.random()} className="TicketAdapt">
                    <TicketsRender
                        ticket={ticket}
                        currency={money[currency.moneyCurrency]}
                        currencyName={currency.moneyCurrency}
                    />
                </div>
            ))}
            <FormModal />
            <SuccessModal />
        </div>
    )
}
export default Ticket
