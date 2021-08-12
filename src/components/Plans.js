import { useEffect, useState } from "react"
import Plan from "./Plan"

function Plans({provider, contract, signer}) {
  const [numPlans, setNumPlans] = useState(0)
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const getNumPlans = async () => {
      const n = await contract.planIndex()
      setNumPlans(n)
      console.log(`${n} plans`)
    }
    getNumPlans()
  }, [contract])

  useEffect(() => {
    const getPlans = async () => {
      const ar = []
      for (let i = 0; i < numPlans; i++) {
        const plan = await contract.plans(i)
        ar.push({
          id: i,
          token: plan.token, 
          merchant: plan.merchant,
          frequency: plan.frequency.toString(),
          cost: plan.cost.toString()
        });
      }

      setPlans(ar)
    }
    getPlans();
  }, [numPlans, contract])

  return (
    <div className="table-wrapper">
      <table className="highlight">
        <thead>
          <th>Plan Id</th>
          <th>Merchant </th>
          <th>Frequency(days) </th>
          <th>Cost(tokens) </th>
          <th>Token Address</th>
          <th></th>
        </thead>
        <tbody className="">
          {plans.map( plan => {
            return (<Plan 
              key={plan.id}
              provider={provider}
              contract={contract}
              signer={signer}
              token={plan.token}
              merchant={plan.merchant}
              freq={plan.frequency}
              cost={plan.cost}
              id={plan.id}
            />)
          })}          
        </tbody>
      </table>
    </div>
  )
}

export default Plans
