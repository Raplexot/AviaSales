import { IntMoney, MoneyState } from '../types/tickets'
import { makeAutoObservable, runInAction } from 'mobx'

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
        this.moneyLoading = true
        try {
            fetch('https://open.er-api.com/v6/latest/RUB')
                .then((res) => res.json())
                .then((data) => {
                    runInAction(()=>{
                        this.money = data.rates
                        this.moneyLoading = false

                    })
                })
        } catch (error) {
            this.moneyError = 'Error of loading'
            this.moneyLoading = false
        }
    }
}
export default new Money()
