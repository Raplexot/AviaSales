import { useEffect, useMemo } from 'react'
import TicketsRender from '../Render/TicketsRender'
import FormModal from '../Render/FormModal'
import SuccessModal from '../Render/SuccessModal'
import '../Render/TicketRender.scss'
import ticketConstructor from '../../store/reducers/ticketsMobX'
import moneyConstructor from '../../store/reducers/moneyMobx'
import stopsConstructor from '../../store/reducers/stopsMobX'
import currencyConstructor from '../../store/reducers/moneyCurrencyMobx'
import { observer } from 'mobx-react-lite'
const Ticket = observer((): JSX.Element => {

    useEffect(() => {
        moneyConstructor.getMoney();
        ticketConstructor.getTicket();
    }, [currencyConstructor.moneyCurrency])

    const memo = useMemo(
        () =>
        stopsConstructor.stops.includes(-1)
                ? ticketConstructor.tickets
                : ticketConstructor.tickets.filter((ticket) =>
                stopsConstructor.stops.includes(ticket.stops)
                  ),
        [ticketConstructor.tickets, stopsConstructor.stops]
    )
    if (moneyConstructor.moneyLoading || ticketConstructor.loading) {
        return <h1>Loading</h1>
    }
    if (moneyConstructor.moneyError || ticketConstructor.error) {
        return (
            <h1>
                {ticketConstructor.error} {moneyConstructor.moneyError}
            </h1>
        )
    }

    return (
        <div className="AllTickets">
            {memo.map((ticket) => (
                <div key={Math.random()} className="TicketAdapt">
                    <TicketsRender
                        ticket={ticket}
                        currency={moneyConstructor.money[currencyConstructor.moneyCurrency]}
                        currencyName={currencyConstructor.moneyCurrency}
                    />
                </div>
            ))}
            <FormModal />
            <SuccessModal />
        </div>
    )
})
export default Ticket
