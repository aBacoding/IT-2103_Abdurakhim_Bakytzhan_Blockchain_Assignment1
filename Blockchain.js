const Block = require('./Block') // Importing the Block class from Block.js
const MerkleTree = require('./MerkleTree') // Importing the MerkleTree class from MerkleTree.js
const crypto = require('crypto') // Importing the crypto library for hashing functionalities

// 3.2 Initialize Blockchain: Defining the Blockchain class and initializing with a genesis block.
class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()] // Initializing blockchain with genesis block
	}

	createGenesisBlock() {
		// Creating a genesis block with no transactions and a predefined hash
		// This will serve as the first block in the blockchain
		return new Block(
			0,
			'0',
			Date.now(),
			[],
			this.calculateHash(new Block(0, '0', Date.now(), []))
		)
	}

	// 3.3 Add Blocks: Adding a new block to the blockchain with proper linking.
	addBlock(transactions) {
		const index = this.chain.length
		const previousHash = this.chain[index - 1].hash
		const timestamp = Date.now()
		const merkleTree = new MerkleTree(transactions)
		const block = new Block(index, previousHash, timestamp, transactions, '')
		block.merkleTree = merkleTree
		block.hash = this.calculateHash(block, merkleTree.getRoot())
		this.chain.push(block)
	}

	calculateHash(block, merkleRoot) {
		// Before stringifying, temporarily remove the hash property to ensure consistent hashing
		const tempHash = block.hash
		block.hash = undefined
		const hashInput = JSON.stringify(block) + merkleRoot
		block.hash = tempHash // Restore the original hash property
		return crypto.createHash('sha256').update(hashInput).digest('hex')
	}

	// 3.6 Block Validation: Validating a single block by comparing its hash and previous hash.
	isBlockValid(block) {
		// Checking if the hash of the block and the previous hash link are correct
		return (
			block.hash === this.calculateHash(block, block.merkleTree.getRoot()) &&
			block.previousHash === this.chain[block.index - 1].hash
		)
	}

	// Ensuring the integrity of the entire blockchain by validating each block.
	isChainValid() {
		// Looping through all blocks in the chain, validating each one
		for (let i = 1; i < this.chain.length; i++) {
			if (!this.isBlockValid(this.chain[i])) {
				return false // If any block is invalid, return false
			}
		}
		return true // If all blocks are valid, return true
	}

	resetBlockchain() {
		// Keep only the genesis block in the blockchain
		this.chain = [this.chain[0]]
	}
}

module.exports = Blockchain // Exporting the Blockchain class for use in other files
