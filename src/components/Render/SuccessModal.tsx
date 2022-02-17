/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect } from 'react'

interface ModalProps1 {
    visible: boolean
    closeFirstModal: (isFirstModal: boolean) => void
    closeSecondModal: (isSecondModal: boolean) => void
}

const SuccessModal = ({
    visible = false,
    closeFirstModal,
    closeSecondModal,
}: ModalProps1) => {
    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                closeSecondModal(false)
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
        <div
            className="modal1"
            onClick={() => {
                closeSecondModal(false)
                closeFirstModal(false)
            }}
        >
            <div className="modal-dialog1" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header1">
                    <h3 className="modal-title1">Success</h3>
                    <span
                        className="modal-close1"
                        onClick={() => closeSecondModal(false)}
                    >
                        &times;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal
