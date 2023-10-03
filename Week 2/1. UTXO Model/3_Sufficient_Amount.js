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
// It takes two parameters, p (the accumulator) and c (the current element being processed). 
// In this case, p represents the accumulated sum, and c represents each UTXO in the inputUTXOs array.
        const inputAmount = this.inputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        const outputAmount = this.outputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        if (inputAmount < outputAmount) {
            throw new Error("Not enough here");
        }
    }
}

module.exports = Transaction;