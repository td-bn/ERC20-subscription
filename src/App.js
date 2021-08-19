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
        <ul class="collection">
          <li className="item"><h5>
            This is a crypto subscription dApp
          </h5></li>
          <li className="item"><h6>
            Subscription are abundant in the world e.g in Netflix, Spotify and a variety of other services
          </h6></li>
          <li className="item"><h6>
            This dApp allows users to create plans that others can subscribe to, accepting any ERC20 tokens as 
            a medium of payment
          </h6></li>
          <li className="item"><h6>
            Users can subscribe to plans using the ERC20 token specified in the plan and cancel the plan anytime they want
          </h6></li>
          <li className="item"><h6>
            Overdue payments can be triggered by anyone
          </h6></li>
        </ul>
        <div className="card-row row">
          <Card provider={provider} signer={signer} contract={contract}/>
        </div>
      </div>
    </div>
  );
}

export default App;
