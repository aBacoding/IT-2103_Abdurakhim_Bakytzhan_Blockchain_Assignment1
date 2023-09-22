// Import the crypto library for cryptographic functionalities
const crypto = require('crypto')

// 3.5 Merkle Tree Integration: Constructing a Merkle tree for transaction storage and verification.
class MerkleTree {
	constructor(transactions) {
		this.transactions = transactions // Transactions to be included in the Merkle tree
		this.tree = this.buildTree(transactions) // Building the tree with transactions
	}

	buildTree(transactions) {
		if (transactions.length === 0) return null

		if (transactions.length === 1) {
			return this.hash(JSON.stringify(transactions[0])) // Return the hash of the single transaction
		}

		// Generate parent nodes by hashing pairs of child nodes (transactions)
		const parentNodes = []
		for (let i = 0; i < transactions.length; i += 2) {
			const leftNode = JSON.stringify(transactions[i])
			const rightNode = JSON.stringify(transactions[i + 1] || transactions[i])
			const parentNodeHash = this.hash(
				this.hash(leftNode) + this.hash(rightNode)
			)
			parentNodes.push(parentNodeHash)
		}

		// Recurse with the parent nodes as input, until reaching the root
		return this.buildTree(parentNodes)
	}

	hash(data) {
		return crypto.createHash('sha256').update(data).digest('hex') // Hashing function
	}

	getRoot() {
		return this.tree // Fetch the root hash of the Merkle tree
	}
}

module.exports = MerkleTree // Exporting the MerkleTree class for use in other files
