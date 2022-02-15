import React, { ReactElement, useEffect, useState } from 'react'
import './navs.css'
import Ticket from '../Ticket/Ticket'

export const Nav = (): ReactElement => {
    const [stops, setStops] = useState('-1')
    const [money, setMoney] = useState('RUB')
    return (
        <div className="Boxes">
            <div className="container">
                <h1>Currency</h1>
                <div className="Button-holder">
                    <button className="B" onClick={() => setMoney('RUB')}>
                        Rub
                    </button>
                    <button className="B" onClick={() => setMoney('USD')}>
                        Usd
                    </button>
                    <button className="B" onClick={() => setMoney('EUR')}>
                        Eur
                    </button>
                </div>
                <h1 className="Title">Quantity of transfers</h1>

                <div className="Checks">
                    <button
                        className="btn btn-info"
                        type="submit"
                        onClick={() => setStops('-1')}
                    >
                        {' '}
                        All
                    </button>

                    <button
                        className="btn btn-info"
                        type="submit"
                        onClick={() => setStops('0')}
                    >
                        {' '}
                        No transfers
                    </button>

                    <button
                        className="btn btn-info"
                        type="submit"
                        onClick={() => setStops('1')}
                    >
                        {' '}
                        1 transfer
                    </button>

                    <button
                        className="btn btn-info"
                        type="submit"
                        onClick={() => setStops('2')}
                    >
                        2 transfers
                    </button>

                    <button
                        type="submit"
                        className="btn btn-info"
                        onClick={() => setStops('3')}
                    >
                        3 transfers
                    </button>
                </div>
            </div>

            <div>
                <Ticket i={stops} moneys={money} />
            </div>
        </div>
    )
}
