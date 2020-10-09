+++
TocOpen = false
aliases = []
author = "Angela Gilhotra"
comments = false
date = 2018-05-15T18:30:00Z
disableShare = false
disableshare = false
hidemeta = false
showToc = true
tags = ["Blockchain"]
title = "Bitcoin – Where it all began"
weight = ""
[cover]
alt = ""
caption = ""
image = ""

+++
> “Great things are done by a series of small things brought together”
>
> Vincent Van Gogh

Bitcoin was no doubt the first of its kind, the amalgamation of equally ingenious innovations that preceded its birth. Bitcoin can be said to be a _particular application_ of _Blockchain_, the technology upon which the cryptocurrency sits upon. To break it down, blockchain is a ‘data structure’, and by data structure it is meant that it is an encapsulation of data and methods to operate on that data. The nearest known data structure analogised to Blockchain could be a Linked List.

Each node in a linked list points to the next node. In a blockchain, each _block_ points to the previous block. Each block contains _transactions_, and each transaction is an _exchange_ of a _digital asset_. In case of Bitcoin, that digital asset is a coin having a monetary value. Now, when **A** sends money to **B**, the record of this transaction (this exchange of value) is added to the block for anyone in future to check the validity of **B** being the true owner of that value. When a certain number of transactions are added to a block, it gets linked to the blockchain. The number of blocks keep adding to its length.

## You might ask, how is it different from fiat currency?

Money isn’t exactly real. It is something societies agree to assign value to. Something each person agrees to have a particular value, including the government. Fiat currency is money backed by the government. Government owns it. Government regulates it.

Two people exchanging a ₹10 note, (1) Promise to pay the bearer the sum (as it is written on the note) and (2) This very promise is signed by the Government (the Governor of RBI).

Now imagine you had the responsibility of creating a digital money system. You’d replace this Government entity with someother regulating entity that would still operate on norms set by the government but the transactions would be digital. You won’t be giving a printed note, you’d be sending a transaction in the form of bits through the Internet.

You’d probably have two problems to solve:

1. How to prevent double spending (A gives ₹10 to B, A gives the same ₹10 to B)
2. How to secure it from hackers

Double spending can be prevented by issuing serial numbers to each token/coin/note (which you see on a printed note as well). Security could be employed to the place that is issuing these serial numbers. So you come up with a solution, a central authority that issues serial numbers, signs each transaction and keeps a record of all the transactions ever made.

1. You get a single break point for the system. Break the server, break the system.
2. One could track all the transactions made by a single person by tracking the serial numbers

#### _This isn’t cash, but this isn’t anonymous either._

[David Chaum](https://sceweb.sce.uhcl.edu/yang/teaching/csci5234WebSecurityFall2011/Chaum-blind-signatures.PDF) proposed in 1983 a system called _Blind Signature_ which successfully de-linked from a central server and yet allowed a central authority to prevent double spending. The goal achieved was an _anonymous_ system that prevented double spending.

A few years (1998) after Chaum’s publication of Digital Cash, Chaum in collaboration with two other cryptographers, Fiat and Naor proposed an improvement upon the previous protocol with an introduction to [offline electronic cash system](http://blog.koehntopp.de/uploads/chaum_fiat_naor_ecash.pdf). The focus shifted from _prevention_ of double spending to detection of it.

At a high level what the system achieved was this: every digital coin issued encodes the owner’s identity but in such a way that no one except the owner himself can decode it. Every time you spend your coin, the recipient will require the sender to decode a random subset of the decoding and they will keep a record of this. This decoding isn’t enough to allow them to determine your identity. But if the coin is ever double spent, both recipients will go to the bank to redeem their notes eventually, and then there is a high probability that the bank can decipher the original identity by putting the two subsets together.

## Moving away from Centralization

Blind Signatures, although was a genius idea, still incorporated centralization. You get a single break point even if it is anonymous. Decentralization meant, no single authority assigning serial numbers yet a method to prevent double spending and a system that is completely secure.

To prevent double spending without a central authority you’d need a record of transactions. If we have 3 transactions, lets say T1, T2 and T3 that occured in that very order, every node in the network should be able to verify that T1 occurred in the past of T2 and T3 occurred in the future of T2. This might be a trivial problem to solve for documents created by hand, but in the digital realm, there is no concept of time.

## Time-Stamping

[Stuart Haber and W. Scott Stornetta](https://www.anf.es/pdf/Haber_Stornetta.pdf) in 1991 proposed a method of determining the creation history of a particular document. The method certified when a particular document was first created or last modified. In lay-man terms, time-stamping is a little something added to the document which proves that the document has been issued before or after a certain time.

In the scheme proposed, there is a time-stampinfg service, to which clients send their documents to be time-stamped. The server receives the document, signs it with the current time and links it to the previous document, and issues a certificate with this information.

## The term ‘blockchain’

An efficiency improvement was proposed to the previous time-stamping scheme ([paper](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.71.4891&rep=rep1&type=pdf)). Linking every single document presented a scaling issue when the number of documents increased. Instead of linking documents individually, a number of documents were collected in blocks, which were further linked. Within each block documents were further linked in a tree structure. (The term ‘blockchain’ was proposed in this paper)

This decreased the amount of checking needed to verify that a particular document appears at a particular point in the history of the system.

## How to mint and regulate?

The solution presented by Haber and Stornetta solved the double spending problem in a decentralized system. Which means a central authority preventing double-spending was not required anymore. But who would provide serial numbers to the coins? Or, how would the coins be minted, and how would they be regulated?

## Proof of Work

[Dwork and Naor](http://www.hashcash.org/papers/pvp.pdf) in 1992 (a similar idea was proposed by Adam Back in 1997) proposed a potential solution to email-spam, broken down as follows:

1. The sender solves a computational puzzle each time before sending an email
2. The recipient’s email program simply ignores the email if it does not have a solution to the puzzle attached

The assumptions being:

1. Computationally costly for a spammer generating hundreds of email at a given moment
2. Checking of the puzzle should not involve solving the puzzle, meaning, the receiver should be easily able to check the solution
3. Each puzzle being completely independent of other puzzles
4. The difficulty level should be adjustable by the recipients
5. These properties were achieved by making use of a cryptographic hash functions to generate the puzzles.

These properties were achieved by making use of a cryptographic hash functions to generate the puzzles.

## Minting and Regulation

The functions of the central authority could now be decentralized:

1. Double Spending — TimeStamping (a trusted third party is still required here)
2. Minting and Regulation of coins — Proof of Work

Earlier (before Bitcoin) proposals that employed the above two methods to propose a completely decentralized system of exchange of money were: [B-money](http://www.weidai.com/bmoney.txt) (Wei-Dai, 1998) and [Bitgold](https://unenumerated.blogspot.com/2005/12/bit-gold.html) (Nick Szabo, 2005)

Characteristics were as follows:

1. Anyone can mint money (making use of a hashcash like system)
2. There exists a peer-to-peer network
3. Each node maintains a personal ledger (no global ledger is maintained) - Each node has its own record of what it perceives everybody’s balance to be.
4. Rely on timestamping services, that sign off on the creation or transfer of money

It is worth mentioning that B-money and Bitgold were informal proposals, latter published as a blog post while the former in a mailing list. The proposals were nevertheless important because they served as setting the stage for Bitgoin by glossing over the issues which were eventually solved by the Bitcoin blockchain.

## Bitcoin: A Peer-to-Peer Electronic Cash System, Satoshi Nakamoto (2008) ([paper](https://bitcoin.org/bitcoin.pdf))

Satoshi Nakamoto not only proposed a robust system, he (there is no known gender for Satoshi Nakamoto) gave a working model for it. Bitcoin (1) Prevented double spending, (2) Didn’t require a trusted third party and (3) Was strong enough for users to trust.

The system can be broken down as follows:

1. The digital asset is the coin that is transferable between nodes
2. An electronic coin is dened as a chain of electronic signatures — sending a coin/digital asset to another person basically means sending a signed hash of all the previous transactions with the public key of the next owner.
3. Each transaction is publicly announced for any node to check the validity of any transaction. To accomplish this, without a TTP (Trusted Third Party), A timestamp server is proposed, which hashes a set of documents to be timestamped and widely publishes the hash.
4. To implement a timestamp server without having to widely publish the hash with each timestamp, proof of work is employed as proposed by Adam Back in HashCash. PoW (Proof of Work) is implemented by adding a ‘Nonce’ to the block header which is to be incremented until a certain specied hash value is reached. Once the required nonce is generated (by expending CPU effort) it cannot be changed and is chained to the previous blocks.
5. Since each block is chained to the previous block, to change a transaction is any block would require to recalculate the hash value of not only that block but all the blocks that follow it.
6. Once the block is published, other nodes express their acceptance by working on generating the nonce for the next block in the chain.
7. As a general rule, the longer chain is accepted as the true chain.

So, that in a nutshell is how Bitcoin came into being. Employing the technologies that existed before to create a system that the world had no idea it needed. More than the cryptocurrency, the technology that it sits upon, namely, the Blockchain promises a disruptive future in the era of Web 3.0.