/* eslint-disable @typescript-eslint/explicit-function-return-type */
import  {  useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface ModalProps {
    visible: boolean
    closeFirstModal: (isFirstModal: boolean) => void
    closeSecondModal: (isSecondModal: boolean) => void
}

const FormModal = ({
    visible = false,
    closeFirstModal,
    closeSecondModal,
}: ModalProps) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            tel: '',
            isSecondModal: false,
            isFirstModal: false,
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
        onSubmit: () => {
            console.log()
        },
    })
    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                closeFirstModal(false)
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    // если компонент невидим, то не отображаем его
    if (!visible) return null

    // или возвращаем верстку модального окна
    return (
        <div className="modal" onClick={() => closeFirstModal(false)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Please enter info</h3>
                    <span
                        className="modal-close"
                        onClick={() => closeFirstModal(false)}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        {
                            <div className="Enters">
                                <div>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        name="email"
                                        className="Email"
                                        type={'email'}
                                        placeholder="Enter Email"
                                    ></input>
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="ERR">{formik.errors.email}</p>
                                ) : null}
                                <div>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.tel}
                                        onBlur={formik.handleBlur}
                                        name="tel"
                                        className="Phone"
                                        type={'tel'}
                                        placeholder="Enter Phone"
                                    ></input>
                                </div>
                                {formik.touched.tel && formik.errors.tel ? (
                                    <p className="ERR">{formik.errors.tel}</p>
                                ) : null}
                                <div>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.pass}
                                        onBlur={formik.handleBlur}
                                        name="pass"
                                        type={'text'}
                                        placeholder="Enter passCode"
                                    ></input>
                                </div>
                                {formik.touched.pass && formik.errors.pass ? (
                                    <p className="ERR">{formik.errors.pass}</p>
                                ) : null}

                                <button
                                    className="Go"
                                    type="submit"
                                    onClick={
                                        formik.dirty && formik.isValid
                                            ? () => closeSecondModal(true)
                                            : () => alert('Complete all Fields')
                                    }
                                >
                                    Send
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormModal
