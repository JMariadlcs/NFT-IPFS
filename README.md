# NFT-IPFS

This is a random NFT collection creation from a Chainlink Hackaton Spring 2022 workshop which is implemented by using Solidity and Hardhat.

## Objetives
1. Create NFT Collection ✅
2. Each NFT has a "rarity" ✅
3. Users pay for minting random NFTs ✅

## Requirements for creating similar projects from scratch
- Start hardhat project:
```bash
npm init -y
npm install --save-dev hardhat
npx hardhat
```
- Add .gitignore file containing:
```bash
node_modules
.env
coverage
coverage.json
typechain

#Hardhat files
cache
artifacts
```

- Install dependencies:
```bash
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
```

## Resources
- [hardhat-nft-fcc](https://github.com/PatrickAlphaC/hardhat-nft-fcc): Patrick's repo for NFTs
- [hardhat-starter-kit](https://github.com/smartcontractkit/hardhat-starter-kit)
- [OpenZeppeling github](https://github.com/OpenZeppelin/openzeppelin-contracts): OpenZeppeling github
- [Chainlink VRF](https://docs.chain.link/docs/get-a-random-number/): NECESARY for getting an actually random number