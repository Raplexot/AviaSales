/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react'

interface ModalProps1 {
    visible: boolean
    title: ReactElement | string
    onClose2: () => void
}

const SecondModal = ({ visible = false, onClose2 }: ModalProps1) => {
    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose2()
                break
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    // если компонент невидим, то не отображаем его
    if (!visible) return null

    // или возвращаем верстку модального окна
    return (
        <div className="modal" onClick={onClose2}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Success</h3>
                    <span className="modal-close" onClick={onClose2}>
                        &times;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SecondModal
