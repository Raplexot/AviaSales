import { FC, useEffect, useMemo } from 'react'
import TicketsRender from '../Render/TicketsRender'
import FormModal from '../Render/FormModal'
import SuccessModal from '../Render/SuccessModal'
import '../Render/TicketRender.scss'
import ticketConstructor from '../../store/reducers/ticketsMobX'
import moneyConstructor from '../../store/reducers/moneyMobx'
import stopsConstructor from '../../store/reducers/stopsMobX'
import currencyConstructor from '../../store/reducers/moneyCurrencyMobx'
import { observer } from 'mobx-react-lite'
const Ticket: FC = observer((): JSX.Element => {
    const { tickets, error, loading } = ticketConstructor
    const { moneyCurrency } = currencyConstructor
    const { stops } = stopsConstructor
    const { money, moneyError, moneyLoading } = moneyConstructor
    useEffect(() => {
        moneyConstructor.getMoney()
        ticketConstructor.getTicket()
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
