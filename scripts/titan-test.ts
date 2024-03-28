const { ethers, upgrades } = require("hardhat");

const ABI = [
    {
        "inputs": [],
        "name": "randomTokenId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
];


async function main() {
    // ## IF WANT TO TEST DEPLOYING THE CONTRACT WITH ISSUE
    // const TitanTesting = await ethers.getContractFactory("TitanTesting");
    // const contract = await TitanTesting.deploy();
    // await contract.waitForDeployment();
    // console.log("TitanTesting deployed to:", contract.target);

    const provider = new ethers.JsonRpcProvider("https://evm.cronos.org")
    const contract = new ethers.Contract("0x7aA95b7113b00058eb40343B36f6Bfa7115F5Dbd", ABI, provider) // cronos
    const value = await contract.randomTokenId()
    console.log(value)
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});