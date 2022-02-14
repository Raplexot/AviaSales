import React, { ReactElement } from 'react'
import './navs.css'
import Ticket from '../Ticket/Ticket'
import Convert from './Convert'
export const Nav = (): ReactElement => {



    return (
        <div className="container">
            <h1>Currency</h1>
            <div className="Button-holder">
                <button className="B" onClick={()=> <Ticket price={<Convert Currency='RUB'/>}/>}>Rub </button>
                <button className="B" onClick={()=> <Ticket price={<Convert Currency='USD'/>}/>}>Usd</button>
                <button className="B" onClick={()=> <Ticket price={<Convert Currency='EUR'/>}/>}>Eur</button>
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
                    <input type="checkbox" ></input>
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


