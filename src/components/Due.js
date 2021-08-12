import { ethers } from 'ethers';
import {useState, useEffect} from 'react';
import Payment from './Payment'
import formatTime from "../utils/DateTimeUtils"

function Due({contract, provider, signer}) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [numPlans, setNumPlans] = useState(0)


  useEffect(() => {
    const getNumPlans = async () => {
      const n = await contract.planIndex()
      setNumPlans(n)
      console.log(`${n} plans`)
    }
    getNumPlans()
  }, [contract])

  useEffect(() => {
    const getSubs = async () => {
      const ar = []
      const address = await signer.getAddress()
      let subscription, plan
      for (let i = 0; i < numPlans; i++) {
        subscription = await contract.subscriptions(address, i)

        if (subscription.user === ethers.constants.AddressZero) continue
        if (subscription.nextPaymentTime > Date.now()/1000) continue

        plan = await contract.plans(i)
        ar.push({
          planId: i,
          from: subscription.startTime.toString(), 
          next: subscription.nextPaymentTime.toString(),
          cost: plan.cost.toString(), 
          merchant: plan.merchant, 
          subscriber: address,
          token: plan.token,
        }); 
      }

      setSubscriptions(ar)
    }
    getSubs();
  }, [numPlans, contract, signer])

  return (
    <div className="table-wrapper">
      <table className="highlight">
        <thead>
          <th>Plan Id</th>
          <th>Merchant </th>
          <th>Payment Due Since</th>
          <th>Cost</th>
          <th></th>
        </thead>
        <tbody className="">
          {subscriptions.map( sub => {
            return (<Payment key={sub.planId} 
              provider={provider}
              contract={contract}
              signer={signer}
              merchant={sub.merchant}
              id={sub.planId}
              from={sub.from}
              next={sub.next}
              cost={sub.cost}
              subscriber={sub.subscriber}
              token={sub.token}
            />)
          })}          
        </tbody>
      </table>
    </div>
  )
}
export default Due
