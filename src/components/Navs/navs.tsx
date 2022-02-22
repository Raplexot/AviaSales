import { ReactElement } from 'react'
import './navs.css'
import stopsConstructor from '../../store/stops'
import moneyCurrency from '../../store/moneyCurrency'
import { observer } from 'mobx-react-lite'

export const Nav = observer((): ReactElement => {
    const { stops } = stopsConstructor

    function stopsHandler(e:number):void{
        return(
            stops.includes(-1)
            ? (stopsConstructor.getStops(-1),
            stopsConstructor.getStops(e))
            : stopsConstructor.getStops(e)
        )
    }

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
                            checked={stops.includes(-1)}
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
                            checked={stops.includes(0) || stops.includes(-1)}
                            onChange={(e) =>
                                stopsHandler(+e.target.value)
                            }
                            type="checkbox"
                            name="stops"
                            value="0"
                        />
                        No trasfers
                    </label>
                    <label className="label">
                        <input
                            checked={stops.includes(1) || stops.includes(-1)}
                            onChange={(e) =>
                                stopsHandler(+e.target.value)
                            }
                            type="checkbox"
                            name="stops"
                            value="1"
                        />
                        One transfer
                    </label>
                    <label className="label">
                        <input
                            checked={stops.includes(2) || stops.includes(-1)}
                            onChange={(e) =>
                                stopsHandler(+e.target.value)
                            }
                            type="checkbox"
                            name="stops"
                            value="2"
                        />
                        Two transfers
                    </label>
                    <label className="label">
                        <input
                            checked={stops.includes(3) || stops.includes(-1)}
                            onChange={(e) =>
                                stopsHandler(+e.target.value)
                            }
                            type="checkbox"
                            name="stops"
                            value="3"
                        />
                        Three transfers
                    </label>
                </div>
            </div>
        </div>
    )
})
