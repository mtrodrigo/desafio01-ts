import { DioAccount } from "./DioAccount"

export class DioAccountEspecial extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  depositEspecial = (value: number): void => {
    this.deposit(value + 10)
  }
}
