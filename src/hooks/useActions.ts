import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../store/action-creator/user'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}
