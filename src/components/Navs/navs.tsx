import React, { ReactElement, useState } from 'react'
import './navs.css'
import Ticket from '../Ticket/Ticket'
import { useActionsCurs, useActionsStops } from '../../hooks/useActions'

export const Nav = (): ReactElement => {
    const [stopsAll, setStopsAll] = useState(true)
    const [stops0, setStops0] = useState(false)
    const [stops1, setStops1] = useState(false)
    const [stops2, setStops2] = useState(false)
    const [stops3, setStops3] = useState(false)
    const [money, setMoney] = useState('RUB')

    function State(
        stopAll: boolean,
        stop0: boolean,
        stop1: boolean,
        stop2: boolean,
        stop3: boolean
    ): Array<number> {
        const mas = []
        if (stopAll) {
            mas.push(-1)
        }
        if (stop0) {
            mas.push(0)
        }
        if (stop1) {
            mas.push(1)
        }
        if (stop2) {
            mas.push(2)
        }
        if (stop3) {
            mas.push(3)
        }
        return mas
    }

    const { getStops } = useActionsStops()
    getStops(State(stopsAll, stops0, stops1, stops2, stops3))

    const { getMoney } = useActionsCurs()
    getMoney(money)
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
                    <label className="Labin">
                        <input
                            checked={stopsAll ? true : false}
                            className="Chik"
                            onChange={() => setStopsAll(!stopsAll)}
                            type="checkbox"
                            name="Stops"
                            value="-1"
                        ></input>{' '}
                        All
                    </label>
                    <label className="Labin">
                        <input
                            checked={
                                stopsAll ? true : false || stops0 ? true : false
                            }
                            className="Chik"
                            onChange={() => setStops0(!stops0)}
                            type="checkbox"
                            name="Stops"
                            value="0"
                        ></input>
                        No trasfers
                    </label>
                    <label className="Labin">
                        <input
                            checked={
                                stopsAll ? true : false || stops1 ? true : false
                            }
                            className="Chik"
                            onChange={() => setStops1(!stops1)}
                            type="checkbox"
                            name="Stops"
                            value="1"
                        ></input>
                        One transfer
                    </label>
                    <label className="Labin">
                        <input
                            checked={
                                stopsAll ? true : false || stops2 ? true : false
                            }
                            className="Chik"
                            onChange={() => setStops2(!stops2)}
                            type="checkbox"
                            name="Stops"
                            value="2"
                        ></input>
                        Two transfers
                    </label>
                    <label className="Labin">
                        <input
                            checked={
                                stopsAll ? true : false || stops3 ? true : false
                            }
                            className="Chik"
                            onChange={() => setStops3(!stops3)}
                            type="checkbox"
                            name="Stops"
                            value="3"
                        ></input>
                        Three transfers
                    </label>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
}
