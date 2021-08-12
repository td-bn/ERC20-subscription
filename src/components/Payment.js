import { ethers } from "ethers";
import * as ERC20 from "../artifacts/contracts/SampleToken.sol/SampleToken.json"
import formatTime from "../utils/DateTimeUtils"


function Payment({provider, subscriber, contract, signer, id, token, merchant, next, cost}) {
  const pay = async (e) => {
    const erc20 = new ethers.Contract(token, ERC20.abi, provider)
    let tx;
    tx = await erc20.connect(signer).approve(contract.address, cost)
    await tx.wait()
 
    console.log("Making due payment")
    tx = await contract.connect(signer).pay(subscriber, id)
    await tx.wait()
    window.alert("Payment success!")
    window.location.reload()
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{merchant}</td>
      <td>{formatTime(next, true)}</td>
      <td>{cost}</td>
      <td>
         <a className="waves-effect waves-teal btn-flat" onClick={(e) => pay(e)}>Pay</a>
      </td>
    </tr>
  )
}

export default Payment

