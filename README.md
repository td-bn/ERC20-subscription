# Subscription Service that uses ERC20 tokens
This is a simple subscription smart contract that allows users to subscribe to a plan created by a merchant
using the same contract.

Merchants can create plans.
Subscribers can subscribe to the same plan. 
Merchants can trigger pending payments by registering a Chainlink Upkeeps. See https://docs.chain.link/docs/chainlink-keepers/register-upkeep for more information of upkeeps. 


Contract deployed on Kovan at: 0x2Ab5e3DF75aec168F0cc18cbB63Aa2847aeb6497 
Interact with dAPP on Kovan at : https://relaxed-brattain-46fdda.netlify.app/

![Screenshot from 2021-08-19 11-28-18](https://user-images.githubusercontent.com/84708985/130015853-96f2f66c-e053-4f4b-9c4d-d07e6762dd5f.png)


Further imporovements:
- Option to subscribe by number of months i.e ask user to approve payment of plans * number of months tokens
- UI and laoding screens while interacting with contract on testnets 
- Add token names for improved UX
- Add loading and messaging to give users more information while transactions are being mined