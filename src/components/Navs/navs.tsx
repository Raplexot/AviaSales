import React, { ReactElement } from 'react'
import './navs.css'
import { useActionsCurrency, useActionsStops } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Nav = (): ReactElement => {
    const stop = useTypedSelector((state) => state.stops)
    const { getMoney } = useActionsCurrency()
    const { getStops } = useActionsStops()
    return (
        <div className="Boxes">
            <div className="container">
                <h1>Currency</h1>
                <div className="Button-holder">
                    <button className="B" onClick={() => getMoney('RUB')}>
                        Rub
                    </button>
                    <button className="B" onClick={() => getMoney('USD')}>
                        Usd
                    </button>
                    <button className="B" onClick={() => getMoney('EUR')}>
                        Eur
                    </button>
                </div>
                <h1 className="Title">Quantity of transfers</h1>

                <div className="checkPoint">
                    <label className="label">
                        <input
                            checked={stop.stops.includes(-1)}
                            onChange={() => {
                                getStops(-1)
                            }}
                            type="checkbox"
                            name="Stops"
                        />{' '}
                        All
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stop.stops.includes(0) ||
                                stop.stops.includes(-1)
                            }
                            onChange={() =>
                                stop.stops.includes(-1)
                                    ? (getStops(-1), getStops(0))
                                    : getStops(0)
                            }
                            type="checkbox"
                            name="Stops"
                        />
                        No trasfers
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stop.stops.includes(1) ||
                                stop.stops.includes(-1)
                            }
                            onChange={() =>
                                stop.stops.includes(-1)
                                    ? (getStops(-1), getStops(1))
                                    : getStops(1)
                            }
                            type="checkbox"
                            name="Stops"
                        />
                        One transfer
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stop.stops.includes(2) ||
                                stop.stops.includes(-1)
                            }
                            onChange={() =>
                                stop.stops.includes(-1)
                                    ? (getStops(-1), getStops(2))
                                    : getStops(2)
                            }
                            type="checkbox"
                            name="Stops"
                        />
                        Two transfers
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stop.stops.includes(3) ||
                                stop.stops.includes(-1)
                            }
                            onChange={() =>
                                stop.stops.includes(-1)
                                    ? (getStops(-1), getStops(3))
                                    : getStops(3)
                            }
                            type="checkbox"
                            name="Stops"
                        />
                        Three transfers
                    </label>
                </div>
            </div>
        </div>
    )
}
