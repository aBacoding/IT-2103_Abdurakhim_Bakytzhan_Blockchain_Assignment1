const Blockchain = require('./Blockchain') // Importing the Blockchain class from Blockchain.js
const Transaction = require('./Transaction') // Importing the Transaction class from Transaction.js

// Instantiate the blockchain
const myBlockchain = new Blockchain()

// 3.8 Interface Integration

function main() {
	console.log(
		'Blockchain initialized: ',
		JSON.stringify(myBlockchain.chain, null, 2)
	)

	// Create new transactions
	const trans1 = new Transaction('Abdurakhim', 'Bakytzhan', 100)
	const trans2 = new Transaction('Bakytzhan', 'Abdu', 50)

	// Add transactions to the blockchain's pending transactions
	myBlockchain.createTransaction(trans1)
	myBlockchain.createTransaction(trans2)

	console.log(
		'Transactions created: ',
		JSON.stringify(myBlockchain.pendingTransactions, null, 2)
	)

	// Process transactions and add them to a new block
	myBlockchain.processTransactions()

	console.log('Block added: ', JSON.stringify(myBlockchain.chain[1], null, 2))

	// Validate the blockchain
	const validChain = myBlockchain.isChainValid() ? 'valid' : 'invalid'
	console.log(`Blockchain is ${validChain}.`)

	// Reset the blockchain
	myBlockchain.resetBlockchain()
	console.log('Blockchain reset: ', JSON.stringify(myBlockchain.chain, null, 2))
}

main()
