import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: any;
    web3?: Web3;
  }
}

const getWeb3 = (): Promise<Web3> => new Promise((resolve, reject) => {
  let currentWeb3: Web3 | undefined;

  if (window.ethereum) {
    currentWeb3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      window.ethereum.enable().then(() => {
        // Accounts now exposed
        resolve(currentWeb3!);
      }).catch((error: Error) => {
        reject(error);
      });
    } catch (error) {
      // User denied account access...
      alert('Please allow access for the app to work');
      reject(error);
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    // Accounts always exposed
    currentWeb3 = window.web3;
    resolve(currentWeb3);
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    reject(new Error('Non-Ethereum browser detected. You should consider trying MetaMask!'));
  }
});

export default getWeb3;
