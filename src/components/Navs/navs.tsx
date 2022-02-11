import React, { ReactElement } from 'react'
import './navs.css'

export const Nav = (): ReactElement => {
    return (
        <div className="container">
            <h1>Currency</h1>
            <div className="Button-holder">
                <button
                    className="B"
                    onClick={() => {
                        return 1
                    }}
                >
                    Rub
                </button>
                <button className="B">Usd</button>
                <button className="B">Eur</button>
            </div>
            <h1 className="Title">Quantity of transfers</h1>

            <div className="Checks">
                <label className="container1">
                    All
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>

                <label className="container1">
                    No transfers
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>

                <label className="container1">
                    1 transfer
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>

                <label className="container1">
                    2 transfers
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>

                <label className="container1">
                    3 transfers
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    )
}
