# Subscription Service that uses ERC20 tokens
This is a simple subscription smart contract that allows users to subscribe to a plan created by a merchant
using the same contract.

Merchants can create plans.
Subscribers can subscribe to the same plan. 
Merchants can trigger pending payments by registering a Chainlink Upkeeps. See https://docs.chain.link/docs/chainlink-keepers/register-upkeep for more information of upkeeps. 


Contract deployed on Rinkeby at: 0xF3388099C0d9C3C1aA0392CBECa8EB18eAbC25Ca 
Interact with dAPP on Rinkeyby at : https://relaxed-brattain-46fdda.netlify.app/

![Screenshot from 2021-08-19 11-28-18](https://user-images.githubusercontent.com/84708985/130015853-96f2f66c-e053-4f4b-9c4d-d07e6762dd5f.png)


Further imporovements:
- Option to subscribe by number of months i.e ask user to approve payment of plans * number of months tokens
- UI and laoding screens while interacting with contract on testnets 