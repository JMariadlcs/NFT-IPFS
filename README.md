# NFT with IPFS and CHAINLINK VRF

This is a random NFT collection creation from a Chainlink Hackaton Spring 2022 workshop which is implemented by using IPFS for decentralize images storage and Chainlink VRF for make it actually random.

NOTICE: we are working with Chainlink VRF V2 which is not still implemented on Polygon Network.

<br/>
<p align="center">
<img src="./images/pug.png" width="225" alt="NFT Pug">
<img src="./images/shiba-inu.png" width="225" alt="NFT Shiba">
<img src="./images/st-bernard.png" width="225" alt="NFT St.Bernard">
</p>
<br/>

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
```bash
npm install --save-dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```
```bash
npm install @chainlink/contracts
```
```bash
npm install dotenv --save
```

## How to deploy
- Rinkeby network:
```bash
npx hardhat deploy --network rinkeby 
```
or 
```bash
yarn hardhat deploy --network rinkeby
```

- Mint:
```bash
npm hardhat deploy --tags mint --network rinkeby
```


## Resources
- [hardhat-nft-fcc](https://github.com/PatrickAlphaC/hardhat-nft-fcc): Patrick's repo for NFTs
- [hardhat-starter-kit](https://github.com/smartcontractkit/hardhat-starter-kit)
- [OpenZeppeling github](https://github.com/OpenZeppelin/openzeppelin-contracts): OpenZeppeling github
- [Chainlink VRF](https://docs.chain.link/docs/get-a-random-number/): NECESARY for getting an actually random number
- [Chainlink VRF contract addresses](https://docs.chain.link/docs/vrf-contracts/): Smart Contract addresses for Chainlink VRF (VRFCoordinator and Key Hash)
- [Chainlink VRF subscription](https://vrf.chain.link): Needed to create subscriptionId for using Chainlink VRF - Create subscription - add funds - get 'ID' - add deployed Smart Contract address as consumer
