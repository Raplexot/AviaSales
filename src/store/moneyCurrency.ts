import { makeAutoObservable } from 'mobx'
import { MoneyCurrencyState } from '../types/tickets'

const initialStateCurrencyMoney: MoneyCurrencyState = {
    moneyCurrency: 'RUB',
}

class MoneyCurrency {
    moneyCurrency: string = initialStateCurrencyMoney.moneyCurrency

    constructor() {
        makeAutoObservable(this)
    }
    getCurrency = (Currency: string): void => {
        this.moneyCurrency = Currency
    }
}
export default new MoneyCurrency()
