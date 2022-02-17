import './TicketRender.css'
import Tick from '../../images/Tick.png'
import Arrow from '../../images/arrow.png'
import FormModal from './FormModal'
import SuccessModal from './SuccessModal'
import { IntTicket } from '../../types/tickets'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActionsModal } from '../../hooks/useActions'

interface IntTickets {
    ticket: IntTicket
    curs: number
    cursName: string
}

const TicketsRender = ({
    ticket,
    curs = 0,
    cursName = '',
}: IntTickets): JSX.Element => {
    const visible = useTypedSelector((state) => state.modal)
    const { show } = useActionsModal()

    return (
        <div className="Set">
            <div className="ContainerT">
                <div className="Contain">
                    <div className="Buttn">
                        <img src={Tick} alt="Ticket" />
                        <div>
                            <>
                                <button
                                    id="show-modal"
                                    onClick={() => show(true, false)}
                                    className="Buy"
                                >
                                    Buy only for :
                                    <span>
                                        {' ' +
                                            (ticket.price * curs).toFixed(0) +
                                            ' ' +
                                            cursName}{' '}
                                    </span>
                                </button>
                                <FormModal visible={visible.formModal} />
                                <SuccessModal visible={visible.successModal} />
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
        </div>
    )
}

export default TicketsRender
