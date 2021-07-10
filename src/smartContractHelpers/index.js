import { ethers } from 'ethers'
// import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Investigation from '../artifacts/contracts/Investigation.sol/Investigation.json'
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'

const investigationAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }


//fetchAllInvestigationsfromBlockChain
  //fetchPersonalInvestigations
  //fetchInvestigationById
  //createNewInvestigation
  //updateInv
  //deleteInv

export async function fetchAllInvestigationsfromBlockChain() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const signer = provider.getSigner()
      console.log({ provider })
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, signer)
      try {
        const data = await contract.getInvestigations(investigationAddress)
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  
//   async function getBalance() {
//     if (typeof window.ethereum !== 'undefined') {
//       const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
//       const balance = await contract.balanceOf(account);
//       console.log("Balance: ", balance.toString());
//     }
//   }

  export async function createInvestigationBlock(investigationData) {
    if (!investigationData) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, signer)
      investigationData.unique_id = investigationAddress;
      investigationData.inspector_name = `${investigationData.inspector_name}`.toLowerCase();
      console.log("checking>>>>>>>>2>>>>>>>", contract, investigationData)
      const transaction = await contract.createInvestigation(investigationData)
      await transaction.wait()
    //   fetchGreeting()
    }
  }

//   async function sendCoins() {
//     if (typeof window.ethereum !== 'undefined') {
//       await requestAccount()
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
//       const transation = await contract.transfer(userAccount, amount);
//       await transation.wait();
//       console.log(`${amount} Coins successfully sent to ${userAccount}`);
//     }
// }