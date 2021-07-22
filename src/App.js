import { ethers } from 'ethers';
import './App.css';

import * as SubscriptionService from './artifacts/contracts/SubscriptionService.sol/SubscriptionService.json';

const contractAddress = "0xF3388099C0d9C3C1aA0392CBECa8EB18eAbC25Ca";
const abi = SubscriptionService.abi;

function connectWeb3() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, provider);

  console.log(signer, provider, contract);
  return [provider, signer, contract];
}

function App() {

  const [provider, signer, contract] = connectWeb3();
  console.log(contract);

  return (
    <div className="App">
      Hello, World!
    </div>
  );
}

export default App;
