/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react'

interface ModalProps {
    visible: boolean
    title: string
    content: ReactElement | string
    footer: ReactElement | string
    onClose1: () => void
}

const firstModal = ({
    visible = false,
    title = '',
    content = '',
    footer = '',
    onClose1,
}: ModalProps) => {
    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }: KeyboardEvent) => {
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
    if (!visible) return null

    // или возвращаем верстку модального окна
    return (
        <div className="modal" onClick={onClose1}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
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
    )
}

export default firstModal
