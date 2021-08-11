import { ethers } from 'ethers';
import Card from './components/Card';
import './App.css';

import * as SubscriptionService from './artifacts/contracts/SubscriptionService.sol/SubscriptionService.json';

const contractAddress = "0xF3388099C0d9C3C1aA0392CBECa8EB18eAbC25Ca";
const abi = SubscriptionService.abi;

function connectWeb3() {
  let provider
  window.ethereum.send('eth_requestAccounts').then(provider = new ethers.providers.Web3Provider(window.ethereum))
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
      <div className="container">
        {/* <div className="row header">

        </div> */}
        <div className="card-row row">
          <Card provider={provider} signer={signer} contract={contract}/>
        </div>
      </div>
    </div>
  );
}

export default App;
