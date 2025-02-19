import { CompanyAccount } from './class/CompanyAccount'
import { DioAccountEspecial } from './class/DioAccontEspecial'
import { PeopleAccount } from './class/PeopleAccount'

console.log('peopleAccount');
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(10)
console.log('\n');

console.log('companyAccount');
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(1000)
console.log('\n');

console.log('especialAccount');
const especialAccount: DioAccountEspecial = new DioAccountEspecial('Rodrigo', 33)
especialAccount.depositEspecial(150)