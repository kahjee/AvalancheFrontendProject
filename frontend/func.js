const { ethers } = require('ethers');

async function loadCounter() {
    const provider = new ethers.providers.JsonRpcProvider(); 


    const [counter] = await ethers.getSigners(); 
    const count = await counter.getCount();
    document.getElementById('counterValue').textContent = count.toString();
}

async function incrementCounter() {
    const [signer] = await ethers.getSigners(); 
    await signer.increment();
    loadCounter();
}

async function decrementCounter() {
    const [signer] = await ethers.getSigners(); 
    try {
        await signer.decrement();
        loadCounter();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

document.getElementById('incrementButton').addEventListener('click', incrementCounter);
document.getElementById('decrementButton').addEventListener('click', decrementCounter);

loadCounter();
