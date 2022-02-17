import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TicketActionCreators from '../store/action-creator/ticket'
import * as MoneyActionCreators from '../store/action-creator/money'
import * as StopsActionCreators from '../store/action-creator/stops'
import * as CursActionCreators from '../store/action-creator/moneyCurs'
import * as ModalActionCreators from '../store/action-creator/modal'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TicketActionCreators, dispatch)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActionsMoney = () => {
    const dispatch = useDispatch()
    return bindActionCreators(MoneyActionCreators, dispatch)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActionsStops = () => {
    const dispatch = useDispatch()
    return bindActionCreators(StopsActionCreators, dispatch)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActionsModal = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ModalActionCreators, dispatch)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActionsCurs = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CursActionCreators, dispatch)
}
