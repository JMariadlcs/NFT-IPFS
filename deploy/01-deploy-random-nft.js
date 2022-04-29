const { network } = require("hardhat")

module.exports = async function(hre) {
    const { getNamedACcounts, deployements } = hre
    const { deployer } = await getNamedACcounts()
    const { deploy, log } = deployements
    const chainId = network.config.chainId

    
}