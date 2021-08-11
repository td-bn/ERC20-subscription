import { ethers } from "ethers";
import * as ERC20 from "../artifacts/contracts/SampleToken.sol/SampleToken.json"

function Plan({provider, contract, signer, id, token, merchant, freq, cost}) {
  const subscribe = async (e) => {
    const erc20 = new ethers.Contract(token, ERC20.abi, provider)
    let tx;
    tx = await erc20.connect(signer).approve(contract.address, cost)
    await tx.wait()
    tx = await contract.connect(signer).subscribe(id, {gasLimit: 900000})
    await tx.wait()
    window.alert("Subscribed!")
  }

  return (
    <tr>
      <td>{merchant}</td>
      <td>{freq}</td>
      <td>{cost}</td>
      <td>{token}</td>
      <td>
         <a className="waves-effect waves-teal btn-flat" onClick={(e) => subscribe(e)}>Subscribe</a>
      </td>
    </tr>
  )
}

export default Plan
