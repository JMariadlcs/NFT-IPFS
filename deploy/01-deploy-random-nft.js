const { network } = require("hardhat")

module.exports = async function(hre) {
    const { getNamedACcounts, deployements } = hre
    const { deployer } = await getNamedACcounts()
    const { deploy, log } = deployements
    const chainId = network.config.chainId

    // we need some addresses
    // if we are working on a testnet or mainnet -> those addresses will exist
    // but for a local chain they WON'T -> they will be mocked
    let vrfCoordinatorV2Adress, subscriptionId
    if (chainId = 31337) { // local one
        // create a fake chainlink VRF node

    } else { // use the real one (testnet/mainnet)

    }
}