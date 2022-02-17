import React, { ReactElement } from 'react'
import './navs.css'
import { useActionsCurs, useActionsStops } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Nav = (): ReactElement => {
    const stop = useTypedSelector((state) => state.stops)
    const { getMoney } = useActionsCurs()
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

                <div className="Checks">
                    <label className="Labin">
                        <input
                            checked={stop.stops.includes(-1)}
                            className="Chik"
                            onChange={() => getStops(-1)}
                            type="checkbox"
                            name="Stops"
                        />{' '}
                        All
                    </label>
                    <label className="Labin">
                        <input
                            checked={stop.stops.includes(0)}
                            className="Chik"
                            onChange={() => getStops(0)}
                            type="checkbox"
                            name="Stops"
                        />
                        No trasfers
                    </label>
                    <label className="Labin">
                        <input
                            checked={stop.stops.includes(1)}
                            className="Chik"
                            onChange={() => getStops(1)}
                            type="checkbox"
                            name="Stops"
                        />
                        One transfer
                    </label>
                    <label className="Labin">
                        <input
                            checked={stop.stops.includes(2)}
                            className="Chik"
                            onChange={() => getStops(2)}
                            type="checkbox"
                            name="Stops"
                        />
                        Two transfers
                    </label>
                    <label className="Labin">
                        <input
                            checked={stop.stops.includes(3)}
                            className="Chik"
                            onChange={() => getStops(3)}
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
