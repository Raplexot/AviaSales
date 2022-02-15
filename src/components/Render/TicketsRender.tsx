/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
import { useState } from 'react'
import './TicketRender.css'
import Tick from '../../images/Tick.png'
import Arrow from '../../images/arrow.png'
import FirstModal from './firstModal'
import SecondModal from './secondModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { IntTicket } from '../../types/tickets'

interface IntTickets {
    ticket: IntTicket
    curs: number
    cursName: string
}

const TicketsRender = ({ ticket, curs = 0, cursName = '' }: IntTickets) => {
    const [isModal, setModal] = useState(false)
    const [modal1, setmodal1] = useState(false)
    const onClose = () => {
        if (formik.isValid && formik.dirty) {
            setmodal1(true)
        } else {
            alert('Complete all fields')
        }
    }

    const onClose1 = () => setModal(false)
    const onClose2 = () => setmodal1(false)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            tel: '',
            modal1: false,
            ismodal: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(/^[a-zA-Z ]+$/, 'Letters only')
                .required('Required'),
            lastName: Yup.string()
                .matches(/^[a-zA-Z ]+$/, 'Letters only')
                .required('Required'),
            pass: Yup.string()
                .matches(/[A-Z][0-9]{8}$/, 'Enter passcode')
                .required('Required'),
            email: Yup.string()
                .matches(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    'Invalid email'
                )
                .required('Required'),
            tel: Yup.string()
                .matches(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    'Invalid phone'
                )
                .required('Required'),
        }),
        onSubmit: (values) => {
            if (formik.isValid) setmodal1(true)
        },
    })

    return (
        <div className="Set">
            <div className="ContainerT">
                <div className="Contain">
                    <div className="Buttn">
                        <img src={Tick} alt="Ticket"></img>
                        <div>
                            <React.Fragment>
                                <button
                                    id="show-modal"
                                    onClick={() => setModal(true)}
                                    className="Buy"
                                >
                                    Buy only for ..
                                    {(ticket.price * curs).toFixed(0) +
                                        cursName}{' '}
                                </button>
                                <FirstModal
                                    visible={isModal}
                                    title="Please , enter info"
                                    content={
                                        <div className="Enters">
                                            <div>
                                                <input
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={formik.values.email}
                                                    onBlur={formik.handleBlur}
                                                    name="email"
                                                    className="Email"
                                                    type={'email'}
                                                    placeholder="Enter Email"
                                                ></input>
                                            </div>
                                            {formik.touched.email &&
                                            formik.errors.email ? (
                                                <p className="ERR">
                                                    {formik.errors.email}
                                                </p>
                                            ) : null}
                                            <div>
                                                <input
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={formik.values.tel}
                                                    onBlur={formik.handleBlur}
                                                    name="tel"
                                                    className="Phone"
                                                    type={'tel'}
                                                    placeholder="Enter Phone"
                                                ></input>
                                            </div>
                                            {formik.touched.tel &&
                                            formik.errors.tel ? (
                                                <p className="ERR">
                                                    {formik.errors.tel}
                                                </p>
                                            ) : null}
                                            <div>
                                                <input
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={
                                                        formik.values.firstName
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    name="firstName"
                                                    className="firstName"
                                                    type={'text'}
                                                    placeholder="Enter Name"
                                                ></input>
                                            </div>
                                            {formik.touched.firstName &&
                                            formik.errors.firstName ? (
                                                <p className="ERR">
                                                    {formik.errors.firstName}
                                                </p>
                                            ) : null}
                                            <div>
                                                <input
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={
                                                        formik.values.lastName
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    name="lastName"
                                                    className="surName"
                                                    type={'text'}
                                                    placeholder="Enter Surname"
                                                ></input>
                                            </div>
                                            {formik.touched.lastName &&
                                            formik.errors.lastName ? (
                                                <p className="ERR">
                                                    {formik.errors.lastName}
                                                </p>
                                            ) : null}
                                            <div>
                                                <input
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={formik.values.pass}
                                                    onBlur={formik.handleBlur}
                                                    name="pass"
                                                    type={'text'}
                                                    placeholder="Enter passCode"
                                                ></input>
                                            </div>
                                            {formik.touched.pass &&
                                            formik.errors.pass ? (
                                                <p className="ERR">
                                                    {formik.errors.pass}
                                                </p>
                                            ) : null}

                                            <button
                                                className="Go"
                                                type="submit"
                                                onClick={onClose}
                                            >
                                                Send
                                                <SecondModal
                                                    visible={modal1}
                                                    title="Success"
                                                    onClose2={onClose2}
                                                />
                                            </button>
                                        </div>
                                    }
                                    footer={<div></div>}
                                    onClose1={onClose1}
                                />
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="Info">
                        <div className="Start">
                            <div className="Departure-time">
                                {ticket.departure_time}
                            </div>
                            <div className="Origin-name">
                                {ticket.origin_name}
                            </div>
                            <div className="Departure-date">
                                {ticket.departure_date}
                            </div>
                        </div>
                        <div className="Stop">
                            <div className="Stops">{ticket.stops} stops</div>
                            <div>
                                <img
                                    className="Arrow"
                                    style={{
                                        height: 50,
                                        textAlign: 'center',
                                    }}
                                    src={Arrow}
                                    alt="Arrow"
                                ></img>
                            </div>
                        </div>
                        <div className="Finish">
                            <div className="Arrival-time">
                                {ticket.arrival_time}
                            </div>
                            <div className="Destination-name">
                                {ticket.destination_name}
                            </div>
                            <div className="Arrival-date">
                                {ticket.arrival_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketsRender
