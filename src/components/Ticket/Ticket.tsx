import React from 'react';
import './Ticket.css';
import Tick from '/home/smiss-user46/Avia-Sales/my-app/src/images/Tick.png'
import Arrow from '/home/smiss-user46/Avia-Sales/my-app/src/images/arrow.png'
const Ticket = () => {
    return (
        <div className='Set'>


        <div className='ContainerT'>
            <div className="Contain">

            <div className='Btn'>
                <img src={Tick} alt = 'Ticket'></img>
            <div><button id="show-modal" className='Buy'>Buy only for ..</button></div>
            </div>
            <div className='Info'>
            <div className='Start'>
                <div style={{fontSize:35, paddingRight:10}}>15:00</div>
                <div style={{fontSize:20}}>Odessa</div>
                <div style={{fontSize:20}}>10 Oct 2018 Mo</div>
            </div>
            <div className="Stop">
                <div style={{textAlign:'center', opacity:.5}}>2 stops</div>
                <div><img src={Arrow} style={{height:50,fontSize:0, textAlign:'center'}} alt = 'Arrow'></img></div>
            </div>
            <div className="Finish">
                <div style={{fontSize:35, paddingLeft:10 ,textAlign:'right'}}>15:40</div>
                <div style={{fontSize:20,textAlign:'right'}}>Vladivostok</div>
                <div style={{fontSize:20}}>11 Oct 2018 Tu</div>
            </div>

            </div>
            </div>
        </div>

        </div>
    );
};

export default Ticket;