// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol"; // to work with COORDINATOR and VRF
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol"; // to use functionalities for Chainlink VRF

contract RandomIpfsNft is ERC721URIStorage, VRFConsumerBaseV2 { // To inherit functions

    VRFCoordinatorV2Interface immutable i_vrfCoordinator; // coordinator for working with Chainlink VRF 
    //|| i_ indicate inmutable variable (require low gas)
    bytes32 immutable i_gasLane;
    uint64 immutable i_subscriptionId;
    uint32 immutable callbackGasLimit;

    uint16 constant REQUEST_CONFIRMATIONS = 3; // how many blocks are needed to be considered complete
    uint32 constant NUM_WORDS = 1; // how many random numbers we want to get


    /**
    * @dev 
    * - We are going to use VRFrequestRandomWords() function from Chainlink VRF
    * so we need to define each parameter that function uses in our contract constructor
    */
    constructor(address vrfCoordinatorV2, bytes32 gasLane, uint64 subscriptionId, uint32 callbackGasLimit) ERC721("Random IPFS NFT", "RIN") VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_vrfCoordinator = VRFCoodinatorV2Interface(vrfCoordinatorV2); // interface(address) -> contract, so i_vrfCoordinator is now a contract (we can interat with it)
        i_gasLane = gasLane; // keyHash -> how much gas is max to get Random Number (price per gas)
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit; // when Chainlink node respond with the random number it uses gas - max gas amount
    }

    /// @notice Mint a random puppy -> use Chainlink VRF -> call requestRandomWords() function
    function requestDoggie() public returns (uint256 requesId){
        requestId = i_vrfCoordinator.requestRandomWords(i_gasLane, i_subscriptionId, REQUEST_CONFIRMATIONS, i_callbackGasLimit, NUM_WORDS);
    }

}