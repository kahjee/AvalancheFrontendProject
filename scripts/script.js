// scripts/deploy.js
const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying the Counter contract with the account:', deployer.address);

    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();

    console.log('Counter contract deployed to address:', counter.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
