import { useEffect } from 'react'
import './TicketRender.scss'
import modalConstructor from '../../store/modal'
import { observer } from 'mobx-react-lite'

const SuccessModal = observer((): JSX.Element => {
    const { modals } = modalConstructor
    // создаем обработчик нажатия клавиши Esc

    const onKeydown = ({ key }: KeyboardEvent): void => {
        switch (key) {
            case 'Escape':
                modalConstructor.showModal([false, false])
                break
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    // если компонент невидим, то не отображаем его
    if (!modals[1]) return <></>

    // или возвращаем верстку модального окна
    return (
        <div
            className="modal1"
            onClick={() => {
                modalConstructor.showModal([false, false])
            }}
        >
            <div className="modal-dialog1" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header1">
                    <h3 className="modal-title1">Success</h3>
                    <span
                        className="modal-close1"
                        onClick={() =>
                            modalConstructor.showModal([false, false])
                        }
                    >
                        &times;
                    </span>
                </div>
            </div>
        </div>
    )
})

export default SuccessModal
