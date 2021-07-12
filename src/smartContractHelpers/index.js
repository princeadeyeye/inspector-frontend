import { ethers } from 'ethers'
import Investigation from '../artifacts/contracts/Investigation.sol/Investigation.json'
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'

const investigationAddress = '0xad203b3144f8c09a20532957174fc0366291643c';

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

// TODOS
//getPsnlInvestigationContract
  //fetchPersonalInvestigations
  //fetchInvestigationById
  //createNewInvestigation
  //updateInv
  //deleteInv

export async function getPsnlInvestigationContract() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fd78f376e590467eb67c614cd3170a8a");
      // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      // const signer = provider.getSigner()
      console.log({ provider })
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, provider)
      console.log(contract)
      try {
        const data = await contract.getInvestigations(investigationAddress)
        console.log('data: ', data);
        return data;
      } catch (err) {
        console.log("Error: ", err)
      }
    }    else {
      console.log('windows etherium is undefined')
    return [];
    }
  }

  export async function getAllInvestigationContract() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fd78f376e590467eb67c614cd3170a8a");
      // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const signer = provider.getSigner()
      console.log({ provider })
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, signer)
      try {
        const data = await contract.getAll()
        console.log('data: ', data)
        return data;
      } catch (err) {
        console.log("Error: ", err)
      }
    }  
    console.log('windows etherium is undefined')
    return [];  
  }


  export async function createInvestigationBlock(investigationData) {
    if (!investigationData) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fd78f376e590467eb67c614cd3170a8a");
      // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log({ provider })
      // const signer = provider.getSigner()
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, signer)
      investigationData.unique_id = investigationAddress;
      investigationData.inspector_name = `${investigationData.inspector_name}`.toLowerCase();
      console.log("checking>>>>>>>>2>>>>>>>", contract, investigationData)
      const transaction = await contract.createInvestigation(investigationData)
      await transaction.wait()
      fetchLastInvestigation()
    }
    console.log('windows etherium is undefined')
    return null;
  }

  async function fetchLastInvestigation() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fd78f376e590467eb67c614cd3170a8a");
      console.log({ provider })
      const contract = new ethers.Contract(investigationAddress, Investigation.abi, provider)
      try {
        const data = await contract.getLastInvestigation()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
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
//   async function getBalance() {
//     if (typeof window.ethereum !== 'undefined') {
//       const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
//       const balance = await contract.balanceOf(account);
//       console.log("Balance: ", balance.toString());
//     }
//   }