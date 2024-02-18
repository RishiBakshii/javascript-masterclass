class Bank{
    constructor(owner,pin){
        this.owner=owner
        this.pin=pin
        this.transactions=[]
    }

    getTransaction(){
        return this.transactions
    }

    deposit(amount){
        this.transactions.push(amount)
        return this
    }

    withdraw(amount){
        this.deposit(-amount)
        return this
    }
}

const user=new Bank('Rishi',3515)

user.deposit(400).deposit(500).withdraw(200).deposit(700)

console.log(user.getTransaction())