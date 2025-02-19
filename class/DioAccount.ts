export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 100
  private status: boolean = true
  private balanceStatus: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      let balanceD = this.balance + value
      console.log('Voce depositou ' + value.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ))
      console.log('Seu saldo atual é: ' + balanceD.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ))
      this.balance = balanceD  
    }
    else{
      console.log('Deposito não realizado');
      
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.validateBalance()){
      const balanceD = this.balance - value
      console.log('Voce sacou ' + value.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ))
      console.log('Seu saldo atual é: ' + balanceD.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ))
    }
  
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  private validateBalance = (): boolean => {
    if (this.balance > 0) {
      return this.balanceStatus
    }

    throw new Error('Saldo insuficiente')
  }

  validateLoan = (value:number) => {
    if(this.validateStatus()){
      const loan = value + this.balance 
      console.log('Seu valor de empréstimo: ' + value.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ))
      console.log('Seu saldo mais o valor de empréstimo: ' + loan.toLocaleString("pt-BR", {style: "currency", currency: "BRL" } ));
      
    }
    else{
      console.log('Você não pode retirar empréstimo');
    }
  }
}
