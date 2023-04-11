# Class Notes

This is an important topic because security is a necessary part of our job and we need to learn this.

1. What is the basic principle behind the Caesar Cipher, and how was it used historically?

Caesar cipher was a substitution code where each letter is shifted by a certain number of letters.

Used by Julius Caesar to communicate to allies.

2. What are the key differences between symmetric and asymmetric encryption? How is asymmetric used in secure communication today?

Symmetric encryption requires both parties to have access to the same key.  Faster, less resources.

Asymmetric encryption uses a public key and a private key pair.  Public key encrypts the data, and the private key decrypts.  Slower, more resources.  It could be used for digital signatures, TLS, etc.

3. How do computers generate random numbers, and what are the differences between true random number generation (TRNG) and pseudo-random number generation (PRNG)? Discuss their use cases in cryptography.

True random number generator uses a physical event that outside of the computer that occurs randomly (like atom decay) to generate a random number.

Pseudo-random number generator uses an algorithm to generate numbers that appears random.

TRNG can be used for sensitive things like encryption.  PRNG can be used for things that don't matter as much, but should not be used for encryption since the algorithm could be figured out.

4. What’s the difference between encryption and decryption? Explain with an analogy.

Encryption is locking a safe.  Decryption is unlocking it.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
