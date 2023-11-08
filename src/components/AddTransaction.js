import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {
    const [text,setText] = useState('')
    const[amount,setAmount] = useState(0)
    const {AddTransaction} = useContext(GlobalContext)
    const onSubmit = (e)=>{
      e.preventDefault()
      const newTransaction = {
        id:Math.floor(Math.random()*1000000),
        amount:parseInt(amount, 10),
        text 
      }
     
      AddTransaction(newTransaction)
    }
  return (
    <>
    <h3>Add new transaction</h3>
    <form>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' placeholder='Enter text...' value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>Amount <br/>
            (negative - expense, positive-income)</label>
            <input type='number' placeholder='Enter Amount...' value={amount} onChange={e => setAmount(e.target.value)}  />
        </div>
        <div className='form-control'>
          <button className='btn' onClick={onSubmit}>Add Transaction</button>
        </div>
    </form>
    </>
  )
}
