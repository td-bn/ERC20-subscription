import { ethers } from 'ethers'
import {useState} from 'react'

function CreatePlan({signer, contract}) {
  const [tokenAddress, setTokenAddress] = useState('0x0')
  const [freq, setFreq] = useState('0')
  const [cost, setCost] = useState('0')
  const [loading, setLoading] = useState(false)

  const checkAndSubmit = async (e) => {
    e.preventDefault()

    if (!ethers.utils.isAddress(tokenAddress)) {
      window.alert("!Not a valid address")
      return
    }

    if (freq <= 0) {
      window.alert("!Frequency should be greater than 0")
      return
    }

    if (cost <= 0) {
      window.alert("!Frequency should be greater than 0")
      return
    }

    console.log(tokenAddress, freq, cost)

    
    setLoading(true)
    const transaction = await contract.connect(signer).createPlan(tokenAddress, freq * 60 * 60 * 24, cost)
    await transaction.wait();
    setLoading(false)
    setTokenAddress('0x0')
    setFreq('')
    setCost('')

    window.alert("Plan created!");
    window.location.reload() 
  }

  return (
    <form 
      onSubmit={(e) => checkAndSubmit(e)}
      className="col s10">
      <div className="row">
        <div className="input-field col s10">
          <input 
            id="tokenAddress" 
            type="text" 
            value={tokenAddress}
            onChange={(e)=>{setTokenAddress(e.target.value)}}
            className="validate" />
          <label htmlFor="tokenAddress">Token Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input 
            id="freq" 
            type="number" 
            value={freq}
            onChange={(e)=>{setFreq(e.target.value)}}
            className="validate" />
          <label htmlFor="freq">Frequency(in days)</label>
        </div>
        <div className="input-field col s6">
          <input 
            id="cost" 
            type="number" 
            value={cost}
            onChange={(e)=>{setCost(e.target.value)}}
            className="validate" />
          <label htmlFor="cost">Cost per billing cycle</label>
        </div>
      </div> 
      <div className="row right">
        <button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action">
          Submit
        </button>
      </div>
    </form>
  )
}

export default CreatePlan
