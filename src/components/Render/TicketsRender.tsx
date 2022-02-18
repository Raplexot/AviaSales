import './TicketRender.scss'
import Tick from '../../images/Tick.png'
import Arrow from '../../images/arrow.png'
import { IntTicket } from '../../types/tickets'
import { useActionsModal } from '../../hooks/useActions'

interface IntTickets {
    ticket: IntTicket
    currency: number
    currencyName: string
}

const TicketsRender = ({
    ticket,
    currency = 0,
    currencyName = '',
}: IntTickets): JSX.Element => {
    const { show } = useActionsModal()

    return (
        
            <div className="ContainerT">
                <div className="Contain">
                    <div className="Buttn">
                        <img src={Tick} alt="Ticket" />
                        <div>
                            <>
                                <button
                                    id="show-modal"
                                    onClick={() => show([true, false])}
                                    className="Buy"
                                >
                                    Buy only for :
                                    <span>
                                        {' ' +
                                            (ticket.price * currency).toFixed(
                                                0
                                            ) +
                                            ' ' +
                                            currencyName}{' '}
                                    </span>
                                </button>
                            </>
                        </div>
                    </div>
                    <div className="Info">
                        <div className="Start">
                            <div className="Departure-time">
                                {ticket.departure_time}
                            </div>
                            <div className="Origin-name">
                                {ticket.origin_name}
                            </div>
                            <div className="Departure-date">
                                {ticket.departure_date}
                            </div>
                        </div>
                        <div className="Stop">
                            <div className="Stops">{ticket.stops} stops</div>
                            <div>
                                <img
                                    className="Arrow"
                                    src={Arrow}
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="Finish">
                            <div className="Arrival-time">
                                {ticket.arrival_time}
                            </div>
                            <div className="Destination-name">
                                {ticket.destination_name}
                            </div>
                            <div className="Arrival-date">
                                {ticket.arrival_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default TicketsRender
