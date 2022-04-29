// It is needed to deploy the MOCKS for use a LOCAL NETWORK (VRFCoordinatorV2Mock deployment in this case)

const BASE_FEE = "250000000000000000" // 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9 // link per gas, is this the gas lane? // 0.000000001 LINK per gas

module.exports = async function(hre) {
    const { getNamedACcounts, deployments } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const chainId = network.config.chainId

    if (chainId == 31337) { // local network
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRICE_LINK]
        })
    }
}

module.exports.tag = ["all", "mocks"]