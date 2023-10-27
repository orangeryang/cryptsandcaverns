# Crypts And Caverns

## Description
The rewritten version in the Cairo language has achieved the same effects and features as the solidity version.<br>
For more infomation, you can check [README](https://github.com/CheDAOLabs/cryptsandcaverns/blob/main/contract/README.md).

## Goerli Address
```
0x078fcf70e22f475b8ffde567f8118e5d99ded383da150e01e55fa79251c7c808
```

# Starknet / Cairo

## Introduction
`Starknet` is a Layer-2 network that makes Ethereum transactions faster, cheaper, and more secure using zk-STARKs technology. Think of it as a boosted layer on top of Ethereum, optimized for speed and cost.

`Cairo` is tailor-made for creating STARK-based smart contracts. As Starknet’s native language, it’s central to building scalable and secure decentralized apps. `Cairo` is a programming language designed for a virtual CPU of the same name.

`Scarb` is the Cairo package manager, its configuration file is `Scarb.toml`.

You can check out the [`Starknet Doc`](https://book.starknet.io/title-page.html) and  [`Cairo Book`](https://book.cairo-lang.org/title-page.html) for more information.


## Installation
Cairo can be installed by simply downloading `Scarb`.
1. Scarb requires a Git executable to be available in the PATH environment variable.
```
$ git --version
```
2. run the following command in your terminal 
```
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
```
3. Verify installation by running the following command in new terminal session, it should print both Scarb and Cairo language versions
```
$ scarb --version

scarb 0.7.0 (58cc88efb 2023-08-23)
cairo: 2.2.0 (https://crates.io/crates/cairo-lang-compiler/2.2.0)
sierra: 1.3.0
```


## Build / Compile
`Cairo` contract first compiles to Sierra, an intermediate representation of `Cairo` which will compile later down to a safe subset of CASM. The point of Sierra is to ensure your CASM will always be provable, even when the computation fails.
```
$ scarb build
```


## Test
```
$ scarb test
```


## Deploy 
We use `Starkli` to __declare__ and __deploy__ our `Cairo` contracts. <br>
you can check out the [`Starkli Book`]([`starli`](https://book.starkli.rs/introduction)) for more information.

_`Remix with Starknet plugin ` is another option._
