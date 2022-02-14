import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../store/action-creator/user'
import * as MoneyActionCreators from '../store/action-creator/money'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActionsMoney= () =>{
    const dispatch = useDispatch()
    return bindActionCreators(MoneyActionCreators,dispatch)
}
