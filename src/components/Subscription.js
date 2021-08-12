import formatTime from "../utils/DateTimeUtils"

function Subscription({provider, contract, signer, id, from, merchant, next, cost}) {
  const cancel = async (e) => {
      console.log("Cancelling plan!")
      const tx = await contract.connect(signer).cancel(id)
      await tx.wait()
      window.alert(`Unsubscribed from plan!`)
      window.location.reload() 
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{merchant}</td>
      <td>{formatTime(from, true)}</td>
      <td>{formatTime(next, true)}</td>
      <td>{cost}</td>
      <td>
         <a className="waves-effect waves-teal btn-flat" onClick={(e) => cancel(e)}>Cancel</a>
      </td>
    </tr>
  )
}

export default Subscription

