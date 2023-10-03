class TXO {
    constructor(owner, amount) { // creating a constructor with input information of owner and amount
        this.owner = owner;
        this.amount = amount;
        this.spent = false; // the money is spent is false by default 
    }
    spend() { // function that change bool of spent money to true
        this.spent = true;
    }
}

module.exports = TXO;