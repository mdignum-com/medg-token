# MEDG Token Contract

## Installation

```bash
npm install -g truffle
npm install
truffle compile && truffle migrate --network mainnet
```

## Deployment Log
```bash
$ truffle compile && truffle migrate --network mainnet

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'mainnet-fork'
> Network id:      1
> Block gas limit: 0x7a1200


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        7983998
   > block timestamp:     1560883493
   > account:             0xC38aF509182cC85d6EEC75E723ee02b5b99515ba
   > balance:             0.1067289677
   > gas used:            246393
   > gas price:           1.1 gwei
   > value sent:          0 ETH
   > total cost:          0.0002710323 ETH

   -------------------------------------
   > Total cost:        0.0002710323 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.0002710323 ETH


Starting migrations...
======================
> Network name:    'mainnet'
> Network id:      1
> Block gas limit: 0x7a212a


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x57a32fbcaa3415084d0a01d98305d391f831c825e7c2508e3c4e5ea5495bc61f
   > Blocks: 5            Seconds: 61
   > contract address:    0x65D59782A5c815aC71f17A8fa92E1aA16A4728d8
   > block number:        7984003
   > block timestamp:     1560883550
   > account:             0xC38aF509182cC85d6EEC75E723ee02b5b99515ba
   > balance:             0.1067124677
   > gas used:            261393
   > gas price:           1.1 gwei
   > value sent:          0 ETH
   > total cost:          0.0002875323 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:        0.0002875323 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.0002875323 ETH
```