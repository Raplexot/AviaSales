import { IntMoney, MoneyState } from '../../types/tickets'
import { makeAutoObservable } from 'mobx'

const initialStateMoney: MoneyState = {
    money: {},
    moneyLoading: false,
    moneyError: null,
}

class Money {
    money: IntMoney = initialStateMoney.money

    moneyLoading: boolean = initialStateMoney.moneyLoading

    moneyError: string | null = initialStateMoney.moneyError

    constructor() {
        makeAutoObservable(this)
    }

    getMoney = (): void => {
        initialStateMoney.moneyLoading = true
        try {
            fetch('https://open.er-api.com/v6/latest/RUB')
                .then((res) => res.json())
                .then((data) => {
                    this.money = data.rates
                })
        } catch (error) {
            initialStateMoney.moneyError = 'Error of loading'
            initialStateMoney.moneyLoading = false
        }
        initialStateMoney.moneyLoading = true
    }
}
export default new Money()
