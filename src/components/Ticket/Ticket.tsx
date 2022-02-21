import { FC, useEffect, useMemo } from 'react'
import TicketsRender from '../Render/TicketsRender'
import FormModal from '../Render/FormModal'
import SuccessModal from '../Render/SuccessModal'
import '../Render/TicketRender.scss'
import ticketStore from '../../store/tickets'
import moneyStore from '../../store/money'
import stopsStore from '../../store/stops'
import currencyStore from '../../store/moneyCurrency'
import { observer } from 'mobx-react-lite'

const Ticket: FC = observer((): JSX.Element => {
    const { tickets, error, loading } = ticketStore
    const { moneyCurrency } = currencyStore
    const { stops } = stopsStore
    const { money, moneyError, moneyLoading } = moneyStore
    useEffect(() => {
        moneyStore.getMoney()
        ticketStore.getTicket()
    }, [moneyCurrency])

    const memo = useMemo(
        () =>
            stops.includes(-1)
                ? tickets
                : tickets.filter((ticket) => stops.includes(ticket.stops)),
        [tickets, stops]
    )
    if (moneyLoading || loading) {
        return <h1>Loading</h1>
    }
    if (moneyError || error) {
        return (
            <h1>
                {error || moneyError}
            </h1>
        )
    }

    return (
        <div className="AllTickets">
            {memo.map((ticket) => (
                <div key={ticket.price+ticket.stops} className="TicketAdapt">
                    <TicketsRender
                        ticket={ticket}
                        currency={money[moneyCurrency]}
                        currencyName={moneyCurrency}
                    />
                </div>
            ))}
            <FormModal />
            <SuccessModal />
        </div>
    )
})
export default Ticket
