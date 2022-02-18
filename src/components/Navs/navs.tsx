import React, { ReactElement } from 'react'
import './navs.css'
import { useActionsCurrency, useActionsStops } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Nav = (): ReactElement => {
    const stop = useTypedSelector((state) => state.stops)
    const { getMoney } = useActionsCurrency()
    const { getStops } = useActionsStops()
    return (
        <div className="boxes">
            <div className="container">
                <h1>Currency</h1>
                <div className="buttonHolder">
                    <button
                        className="currencyButtons"
                        onClick={() => getMoney('RUB')}
                    >
                        Rub
                    </button>
                    <button
                        className="currencyButtons"
                        onClick={() => getMoney('USD')}
                    >
                        Usd
                    </button>
                    <button
                        className="currencyButtons"
                        onClick={() => getMoney('EUR')}
                    >
                        Eur
                    </button>
                </div>
                <h1 className="title">Quantity of transfers</h1>

                <div className="checkPoint">
                    <label className="label">
                        <input
                            checked={stop.stops.includes(-1)}
                            onChange={() => {
                                getStops(-1)
                            }}
                            type="checkbox"
                            name="stops"
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
                            name="stops"
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
                            name="stops"
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
                            name="stops"
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
                            name="stops"
                        />
                        Three transfers
                    </label>
                </div>
            </div>
        </div>
    )
}
