class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        const anySpent = this.inputUTXOs.some((x) => x.spent);
        if (anySpent) {
            throw new Error("Cannot include a spent UTXO");
        }

        const inputAmount = this.inputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        const outputAmount = this.outputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        if (inputAmount < outputAmount) {
            throw new Error("Not enough here");
        }

// method is used to iterate through each element of an array and apply a provided function to each element
// The purpose of this spend() method is to mark the UTXO as "spent," indicating that it has been used in the current transaction
        this.inputUTXOs.forEach((utxo) => {
            utxo.spend();
        });
    }
}

module.exports = Transaction;