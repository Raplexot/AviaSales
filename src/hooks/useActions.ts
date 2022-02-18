import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TicketActionCreators from '../store/action-creator/ticket'
import * as MoneyActionCreators from '../store/action-creator/money'
import * as StopsActionCreators from '../store/action-creator/stops'
import * as CurrencyActionCreators from '../store/action-creator/moneyCurrency'
import * as ModalActionCreators from '../store/action-creator/modal'

export const useActions = ():any => {
    const dispatch = useDispatch()
    return bindActionCreators(TicketActionCreators, dispatch)
}

export const useActionsMoney = ():any  => {
    const dispatch = useDispatch()
    return bindActionCreators(MoneyActionCreators, dispatch)
}
export const useActionsStops = ():any  => {
    const dispatch = useDispatch()
    return bindActionCreators(StopsActionCreators, dispatch)
}
export const useActionsModal = ():any  => {
    const dispatch = useDispatch()
    return bindActionCreators(ModalActionCreators, dispatch)
}
export const useActionsCurrency = ():any  => {
    const dispatch = useDispatch()
    return bindActionCreators(CurrencyActionCreators, dispatch)
}
