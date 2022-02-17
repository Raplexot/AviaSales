import { useEffect } from 'react'
import { useActionsModal } from '../../hooks/useActions'

interface ModalProps1 {
    visible: boolean
}

const SuccessModal = ({ visible = false }: ModalProps1): JSX.Element => {
    const { show } = useActionsModal()
    // создаем обработчик нажатия клавиши Esc

    const onKeydown = ({ key }: KeyboardEvent): void => {
        switch (key) {
            case 'Escape':
                show(false, false)
                break
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    // если компонент невидим, то не отображаем его
    if (!visible) return <></>

    // или возвращаем верстку модального окна
    return (
        <div
            className="modal1"
            onClick={() => {
                show(false, false)
            }}
        >
            <div className="modal-dialog1" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header1">
                    <h3 className="modal-title1">Success</h3>
                    <span
                        className="modal-close1"
                        onClick={() => show(false, false)}
                    >
                        &times;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal
