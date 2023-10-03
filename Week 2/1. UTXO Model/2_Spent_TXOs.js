class Transaction {
    constructor(inputUTXOs, outputUTXOs) { // creating a constructor with input information of inputUTXOs and outputUTXOs
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() { // 
        const anySpent = this.inputUTXOs.some((x) => x.spent); 
        //method to check if at least one element in the inputUTXOs array has the spent property set to true
        if (anySpent) {
            throw new Error("Cannot include a spent UTXO"); // error message
        }
    }
}

module.exports = Transaction;