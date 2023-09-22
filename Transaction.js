// Defining a Transaction structure to handle transfers between addresses.
class Transaction {
	constructor(fromAddress, toAddress, amount) {
		this.fromAddress = fromAddress // Address of the sender
		this.toAddress = toAddress // Address of the recipient
		this.amount = amount // Amount to be transferred
	}
}

module.exports = Transaction // Exporting the Transaction class for use in other files
