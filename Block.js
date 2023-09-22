// 3.1 Define Blockchain Structure: Defining a Block structure with essential properties.
class Block {
	constructor(index, previousHash, timestamp, transactions, hash) {
		this.index = index // Position of block within the blockchain
		this.previousHash = previousHash // Hash of the preceding block
		this.timestamp = timestamp // Time when block is created
		this.transactions = transactions // Transactions included in this block
		this.hash = hash // Hash of this block
	}
}

module.exports = Block // Exporting the Block class for use in other files
