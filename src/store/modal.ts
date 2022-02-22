import { makeAutoObservable } from 'mobx'
import { ModalState } from '../types/tickets'

const initialState: ModalState = {
    modals: [false, false],
}

class Modal {
    modals: boolean[] = initialState.modals

    constructor() {
        makeAutoObservable(this)
    }

    showModal = (bool: boolean[]): void => {
        this.modals = bool
    }
}
export default new Modal()
