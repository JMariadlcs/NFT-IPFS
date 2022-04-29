const { ethers } =  require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {

    // Random IPFS NFT
    const { deployer } = await getNamedAccounts()
    const randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer)
    const randomIpfsNftMintTx = await randomIpfsNft.requestDoggie()
    const randomIpfsNftMintTxReceipt = await randomIpfsNftMintTx.wait(1)
}

module.exports.tags = ["all", "mint"]