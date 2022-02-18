import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TicketActionCreators from '../store/action-creator/ticket'
import * as MoneyActionCreators from '../store/action-creator/money'
import * as StopsActionCreators from '../store/action-creator/stops'
import * as CurrencyActionCreators from '../store/action-creator/moneyCurrency'
import * as ModalActionCreators from '../store/action-creator/modal'

export const useActions = (): typeof TicketActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(TicketActionCreators, dispatch)
}

export const useActionsMoney = (): typeof MoneyActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(MoneyActionCreators, dispatch)
}

export const useActionsStops = (): typeof StopsActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(StopsActionCreators, dispatch)
}

export const useActionsModal = (): typeof ModalActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(ModalActionCreators, dispatch)
}

export const useActionsCurrency = (): typeof CurrencyActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(CurrencyActionCreators, dispatch)
}
