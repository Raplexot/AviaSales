import React, { ReactElement } from 'react'
import './navs.css'
import stopsConstructor from '../../store/reducers/stopsMobX'
import moneyCurrency from '../../store/reducers/moneyCurrencyMobx'
import { observer } from 'mobx-react-lite'

export const Nav = (): ReactElement => {
   
    return (
        <div className="boxes">
            <div className="container">
                <h1>Currency</h1>
                <div className="buttonHolder">
                    <button
                        className="currencyButtons"
                        onClick={() => moneyCurrency.getCurrency('RUB')}
                    >
                        Rub
                    </button>
                    <button
                        className="currencyButtons"
                        onClick={() => moneyCurrency.getCurrency('USD')}
                    >
                        Usd
                    </button>
                    <button
                        className="currencyButtons"
                        onClick={() => moneyCurrency.getCurrency('EUR')}
                    >
                        Eur
                    </button>
                </div>
                <h1 className="title">Quantity of transfers</h1>

                <div className="checkPoint">
                    <label className="label">
                        <input
                            checked={stopsConstructor.stops.includes(-1)}
                            onChange={() => {
                                stopsConstructor.getStops(-1)
                            }}
                            type="checkbox"
                            name="stops"
                        />{' '}
                        All
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stopsConstructor.stops.includes(0) ||
                                stopsConstructor.stops.includes(-1)
                            }
                            onChange={() =>
                                stopsConstructor.stops.includes(-1)
                                    ? (stopsConstructor.getStops(-1), stopsConstructor.getStops(0))
                                    : stopsConstructor.getStops(0)
                            }
                            type="checkbox"
                            name="stops"
                        />
                        No trasfers
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stopsConstructor.stops.includes(1) ||
                                stopsConstructor.stops.includes(-1)
                            }
                            onChange={() =>
                                stopsConstructor.stops.includes(-1)
                                    ? (stopsConstructor.getStops(-1), stopsConstructor.getStops(1))
                                    : stopsConstructor.getStops(1)
                            }
                            type="checkbox"
                            name="stops"
                        />
                        One transfer
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stopsConstructor.stops.includes(2) ||
                                stopsConstructor.stops.includes(-1)
                            }
                            onChange={() =>
                                stopsConstructor.stops.includes(-1)
                                    ? (stopsConstructor.getStops(-1), stopsConstructor.getStops(2))
                                    : stopsConstructor.getStops(2)
                            }
                            type="checkbox"
                            name="stops"
                        />
                        Two transfers
                    </label>
                    <label className="label">
                        <input
                            checked={
                                stopsConstructor.stops.includes(3) ||
                                stopsConstructor.stops.includes(-1)
                            }
                            onChange={() =>
                                stopsConstructor.stops.includes(-1)
                                    ? (stopsConstructor.getStops(-1), stopsConstructor.getStops(3))
                                    : stopsConstructor.getStops(3)
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
