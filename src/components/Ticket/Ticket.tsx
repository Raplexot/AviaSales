import React, { ReactElement, useState } from 'react'
import './Ticket.css'
import Tick from '/home/smiss-user46/Avia-Sales/my-app/src/images/Tick.png'
import Arrow from '/home/smiss-user46/Avia-Sales/my-app/src/images/arrow.png'
interface ModalProps {
    visible: boolean
    title: ReactElement|string
    content: ReactElement | string
    footer: ReactElement | string
    
    onClose1:()=>void
}

const Modal = ({
                   visible = false,
                   title = '',
                   content = '',
                   footer = '',
                   onClose1,
               }: ModalProps) => {

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose1()
                break
        }
    }

    // c помощью useEffect цепляем обработчик к нажатию клавиш
    // https://ru.reactjs.org/docs/hooks-effect.html
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })


    // если компонент невидим, то не отображаем его
    if (!visible) return null;

    // или возвращаем верстку модального окна
    return <div className="modal" onClick={onClose1}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h3 className="modal-title">{title}</h3>
                <span className="modal-close" onClick={onClose1}>
            &times;
          </span>
            </div>
            <div className="modal-body">
                <div className="modal-content">{content}</div>
            </div>
            {footer && <div className="modal-footer">{footer}</div>}
        </div>
    </div>
}
const Ticket = () => {
    
    const [isModal, setModal] = React.useState(false)
    const [email, setEmail]= useState('')
    const [tel, settel]= useState('')
    const [emailDirty, setemailDirty]= useState(false)
    const [telDirty, settelDirty]= useState(false)
    const [emailError, setemailError]= useState('Field must not be empty')
    const [telError, settelError]= useState("Field must not be empty")
    const [Name, setName]= useState( '')
    const [Surname, setSurname]= useState('')
    const [NameDirty, setNameDirty]= useState(false)
    const [SurnameDirty, setSurnameDirty]= useState(false)
    const [NameError, setNameError]= useState('Field must not be empty')
    const [SurnameError, setSurnameError]= useState("Field must not be empty")
    const [Pass, setPass]= useState('')
    const [PassDirty, setPassDirty]= useState(false)
    const [PassError, setPassError]= useState("Field must not be empty")
    const onClose = (e) => 
    {
        
        if((emailDirty && emailError=="")&&(telDirty && telError=="")&&(NameDirty && NameError=="")&&(SurnameDirty && SurnameError=="")&&(PassDirty && PassError==""))
        setModal(false)
        else{alert("Complete all fields")}
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if((!re.test((e.target.value).toLowerCase())))
        {
            setemailError('Incorrect value')
        }
        else{
            setemailError('')
        }
    }
    const onClose1= () => setModal(false);
    const telHandler=(e)=>{
        settel(e.target.value)
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if((!re.test((e.target.value))))
        {
            settelError('Incorrect value')
        }
        else{
            settelError('')
        }
    }
    const NameHandler=(e)=>{
        setName(e.target.value)
        const re = /^[a-zA-Z ]+$/
        if((!re.test((e.target.value).toLowerCase())))
        {
            setNameError('Incorrect value')
        }
        else{
            setNameError('')
        }
    }
    const SurnameHandler=(e)=>{
        setSurname(e.target.value)
        const re = /^[a-zA-Z ]+$/
        if((!re.test((e.target.value).toLowerCase())))
        {
            setSurnameError('Incorrect value')
        }
        else{
            setSurnameError('')
        }
    }
    const PassHandler=(e)=>{
        setPass(e.target.value)
        const re = /[A-Z][0-9]{8}$/
        if((!re.test((e.target.value))))
        {
            setPassError('Incorrect value')
        }
        else{
            setPassError('')
        }
    }
    const blurHandler=(e)=>{
        switch(e.target.name){
            case "email":
                setemailDirty(true)
                break;
            case "tel":
                settelDirty(true)
                break;
            case "Name":
                setNameDirty(true)
                break;
            case "Surname":
                setSurnameDirty(true)
                break;
            case "Pass":
                setPassDirty(true)
                break;
        }
    }
    return (
        
        <div className="Set">
            <div className="ContainerT">
                <div className="Contain">
                    <div className="Btn">
                        <img src={Tick} alt="Ticket"></img>
                        <div>
                        <React.Fragment>
                        <button id="show-modal" onClick={() => setModal(true)} className="Buy">Buy only for ..
                            <Modal
                                visible={isModal}
                                title={
                                <div className='Title1' style={{display:'inline-block', textAlign:'center'}}>
                                     Please , enter info
                                </div>
                                }
                                content={
                                <div className='Enters'>
                                    {(emailDirty && emailError)&& <div style={{color:'red'}}>{emailError}</div>}
                                        <div><input onChange={(e)=>{emailHandler(e)}} value={email} onBlur={(e)=>{blurHandler(e)}} name='email' className='Email' type={'email'} placeholder='Enter Email'></input></div>
                                    {(telDirty && telError)&& <div style={{color:'red'}}>{telError}</div>}
                                        <div><input onChange={(e)=>{telHandler(e)}} value={tel} onBlur={(e)=>{blurHandler(e)}} name='tel' className='Phone'type={'tel'} placeholder='Enter Phone'></input></div>
                                    {(NameDirty && NameError)&& <div style={{color:'red'}}>{NameError}</div>}
                                        <div><input onChange={(e)=>{NameHandler(e)}} value={Name} onBlur={(e)=>{blurHandler(e)}} name='Name' className='Name' type={'text'} placeholder='Enter Name'></input></div>
                                    {(SurnameDirty && SurnameError)&& <div style={{color:'red'}}>{SurnameError}</div>}
                                        <div><input onChange={(e)=>{SurnameHandler(e)}} value={Surname} onBlur={(e)=>{blurHandler(e)}} name='Surname' className='Surname'type={'text'} placeholder='Enter Surname'></input></div>
                                    {(PassDirty && PassError)&& <div style={{color:'red'}}>{PassError}</div>}
                                        <div><input onChange={(e)=>{PassHandler(e)}} value={Pass} onBlur={(e)=>{blurHandler(e)}} name='Pass' type={'text'} placeholder='Enter PassCode'></input></div> 
                                </div>
                                }
                                 footer={<button onClick={onClose}>Send</button>}
                                 onClose1={onClose1}
                            />
                        </button>
                     </React.Fragment>
                            
                                
                           
                        </div>
                    </div>
                    <div className="Info">
                        <div className="Start">
                            <div style={{ fontSize: 35, paddingRight: 10 }}>
                                15:00
                            </div>
                            <div style={{ fontSize: 20 }}>Odessa</div>
                            <div style={{ fontSize: 20 }}>10 Oct 2018 Mo</div>
                        </div>
                        <div className="Stop">
                            <div style={{ textAlign: 'center', opacity: 0.5 }}>
                                2 stops
                            </div>
                            <div>
                                <img
                                    src={Arrow}
                                    style={{
                                        height: 50,
                                        fontSize: 0,
                                        textAlign: 'center',
                                    }}
                                    alt="Arrow"
                                ></img>
                            </div>
                        </div>
                        <div className="Finish">
                            <div
                                style={{
                                    fontSize: 35,
                                    paddingLeft: 10,
                                    textAlign: 'right',
                                }}
                            >
                                15:40
                            </div>
                            <div style={{ fontSize: 20, textAlign: 'right' }}>
                                Vladivostok
                            </div>
                            <div style={{ fontSize: 20 }}>11 Oct 2018 Tu</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket
