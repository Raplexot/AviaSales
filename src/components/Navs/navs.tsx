import React, { ReactElement, useEffect, useState } from 'react'
import './navs.css'
import Ticket from '../Ticket/Ticket'

export const Nav = (): ReactElement => {
     const [stops, setStops]= useState('-1');
  
console.log(stops)
    return (
        <div className="Boxes">
        <div className="container">
            <h1>Currency</h1>
            <div className="Button-holder">
                <button className="B" >Rub </button>
                <button className="B" >Usd</button>
                <button className="B" >Eur</button>
            </div>
            <h1 className="Title">Quantity of transfers</h1>

            <div className="Checks">
                <label className="container1"> 
                    All
                    <button type="button" onClick={()=>setStops('-1')}></button>
                    <span className="checkmar"></span>
                </label>

                <label className="container1">
                    No transfers
                    <button type="button" onClick={() => setStops('0')}></button>
                    <span className="checkmar"></span>
                </label>

                <label className="container1">
                    1 transfer
                    <button type="button" onClick={() => setStops('1')}></button>
                    <span className="checkmar"></span>
                </label>

                <label className="container1">
                    2 transfers
                    <button type="button" onClick={() => setStops('2')}></button>
                    <span className="checkmar"></span>
                </label>

                <label className="container1">
                    3 transfers
                    <input type="button" onClick={() => setStops('3')}></input>
                    <span className="checkmar"></span>
                </label>
            </div>
        </div>
        
        <Ticket i = {stops}/>
        </div>
    )
}


