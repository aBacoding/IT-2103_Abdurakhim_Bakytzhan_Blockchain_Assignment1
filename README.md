# IT-2103_Abdurakhim_Bakytzhan_Blockchain_Assignment1

## Running Settings

1. `npm install crypto` - will install the necessary dependency (crypto)
2. `node main.js` - compiles the main javascript file and shows result in console

Course: Blockchain Technologies Assignment: Implementing a Basic Blockchain with Merkle Tree

Objective: The objective of this programming assignment is to introduce students to the fundamental concepts of blockchain technology and provide hands-on experience in implementing a basic blockchain system with the inclusion of a Merkle tree. This assignment does not require knowledge of dApps, Solidity, or smart contracts.

Instructions:

1. Investigate Blockchain Principles (5 points):

- Before starting the implementation, students should investigate blockchain
  principles and working mechanisms by utilizing internet resources,
  textbooks, or academic papers. Gain a solid understanding of how
  blockchain technology functions.

  **Answer:**

  **Decentralization:** Unlike traditional systems where control is exercised by a single entity, in a blockchain, control is distributed among many computers (called nodes). Each of them has equal rights and access to all data.

  **Immutability:** Once a transaction is added to the blockchain, it stays there forever. It cannot be changed or deleted, which keeps it honest and secure.

  **Consensus Mechanisms:** There are methods to ensure that everyone agrees that transactions are valid. Common methods include Proof of Work and Proof of Stake.

  **Smart Contracts:** These are a kind of digital contracts that automatically perform certain actions when conditions are met, without needing an intermediary.

  **Cryptography:** Techniques to ensure the security of data and authenticity of transactions.

  **Tokenization:** Assets can be turned into digital tokens on the blockchain, making them easy to exchange and transfer to different owners.

  **Peer-to-Peer Network (P2P):** Blockchain operates on a peer-to-peer network, eliminating the need for intermediaries, thus reducing costs and speeding up the process.

  **Verification:** The process of checking that transactions and data are real and follow the rules in a blockchain network. Transactions are checked by the nodes in the network for validity before being added to the block.

  **Distributed:** Data and decisions are distributed across many computers, not just one. Everyone in the network has a copy of the ledger, so everything's transparent for all to see. Each computer, called a node, keeps a copy of all transactions and has a say in their verification. In this way, no one person or organization has complete control, making everything fairer and more secure.

2. Team Formation (Optional):

- Students have the option to form teams of up to 3 members for this
  assignment.

  **Answer:** I decided to do this assignment alone. My name is Abdurakhim Bakytzhan from group IT-2103.

3. Blockchain Implementation (Programming Task):

   3.1 Define Blockchain Structure (10 points):

- Clear and complete definition of block structure.

  **Answer:** Block structure, in terms of blockchain technology, is about the way data is arranged and structured within a block. Every block in a blockchain holds several transactions and metadata concerning the block itself. In particular, we can distinguish two main parts of a block - the block header and the block body.

  **Block Header:**

  a. Number: Specifies the version of the block format.

  b. Previous Block Hash: A reference to the hash of the previous block in the chain, ensuring the integrity and order of the blocks in the blockchain.

  c. Merkle Root: A hash of all the transactions included in the block, ensuring the integrity of transaction data.

  d. Timestamp: A timestamp marking the time when the block was created.

  e. Nonce: A changeable random value used to find a block hash that meets the proof-of-work criteria.

  **Block Body:**

- Everything related to transactions is included directly in the block body. A transaction captures an event, like when cash is transferred from a sender's account to a receiver's account. Each transaction has its own structure, which includes, among other things, input, output, and amount.

  3.7 Version Control (VCS) (10 points):

* Effective use of VCS, including regular commits by all team members.

  **Answer:** As you can see, since I work alone, all the commits were made by me.

  3.9 Final Review (5 points):

- Comprehensive review of the blockchain implementation.

  **Answer:**

  In my Block class, I've encapsulated the essential components that define a block in a blockchain. I have initialized key attributes such as index, previousHash, timestamp, transactions, and hash in the constructor, laying down a clear and concise structure for a block.

  I implemented the genesis block creation through the createGenesisBlock method, ensuring a robust starting point for the blockchain. This is a crucial step that sets the stage for adding subsequent blocks to the chain.

  With the addBlock method, I have effectively handled the addition of new blocks to the chain. Moreover, I've managed the previousHash linkage adeptly, ensuring the integrity of the blockchain as it expands.

  I encapsulated transactions in the Transaction class and implemented createTransaction and processTransactions methods to handle transactions before they're consolidated into a block. While basic, this provides a pathway for more robust validation and processing of transactions in the future.

  In the MerkleTree class, I introduced a mechanism for hashing transactions and organizing them into a tree structure, aligning with the principles of a Merkle Tree. The buildTree and hash methods were well thought out to optimize transaction verification.

  I incorporated isBlockValid and isChainValid methods for basic validation, ensuring the integrity and correctness of the data within the blockchain. This is fundamental for maintaining trust and authenticity in the blockchain data.

  I provided a simple console-based interface through the main.js script for interacting with the blockchain. Although basic, it demonstrates the core functionalities of my blockchain implementation effectively.

  I have organized my code in a modular fashion across different files and classes, which will facilitate maintenance and future expansions. However, I acknowledge that more commentary within the code could enhance its readability and understandability.

  To summarize, my blockchain implementation lays a solid foundation with well-structured and modular code. The core functionality is implemented well and there is a clear path for expansion and improvement, especially in areas such as transaction processing, error handling, user interface and performance optimization.

4. Demonstration and Q&A (Individual or Team Task) (15 points):

- Effective demonstration of blockchain functionality, including the Merkle tree.

* Clear and confident responses to questions related to the program's
  functionality and contributions to the VCS.

  **Answer:**

  ## Execution Output

  The output generated from running the `node main.js` command has been saved in the `output.txt` file. Refer to [output.txt](output.txt) for the detailed execution log.
