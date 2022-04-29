const { args } = require("commander")
const { BigNumber } = require("ethers")
const { network, ethers } = require("hardhat")

module.exports = async function(hre) {
    const { getNamedACcounts, deployments } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const chainId = network.config.chainId
    const FUND_AMOUNT = "1000000000000000000000"

    let tokenUris = [ // ipfs tokenUris by Patrick
        "ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo",
        "ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm",
        "ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d",
    ]

    //  ---------FIRST: DEPLOY VRFCOORDINATORV2---------

    // we need some addresses
    // if we are working on a testnet or mainnet -> those addresses will exist
    // but for a local chain they WON'T -> they will be mocked
    let vrfCoordinatorV2Address, subscriptionId
    if (chainId = 31337) { // local one | MOCKED NETWORK with MOCKED VRFCOORDINATOR
        // create a fake chainlink VRF node
        const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address // asign the deployed address to vrfCoordinatorV2Address
        const tx = await vrfCoordinatorV2Mock.createSubscription() // needed to work with vrfCoordinator from Chainlink
        const txReceipt = await tx.wait(1) // wait 1 block
        subscriptionId = txReceipt.events[0].args.subscriptionId
        await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT)

    } else { // use the real one (testnet/mainnet)
        vrfCoordinatorV2Address = "0x6168499c0cFfCaCD319c818142124B7A15E857ab" // could be imported from another file
        subscriptionId = "3587" // create vrf subscription and add funds
    }


     //  ---------SECOND: DEPLOY RANDOMIPFSNFT---------

    args = [ // args of RandomIpfsNft.sol constructor
        vrfCoordinatorV2Address,
        "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // keyHash
        subscriptionId,
        "500000",
        // list of dogs
        tokenUris,
    ]

    const RandomIpfsNft = await deploy("RandomIpfsNft", {
        from: deployer,
        args: args, // defined above
        log: true,
    })

    console.log(RandomIpfsNft.address)
}