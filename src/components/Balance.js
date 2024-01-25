import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {resetTransactions} from '../redux/transactionSlice'

export const Balance = () => {
  //const {transactions,resetTransactions} = useContext(GlobalContext)
  const transactions = useSelector((state)=>state.transaction.transactions)
  let amounts = transactions.map(transaction=>transaction.amount)
  const dispatch = useDispatch()
  return (
    <div className='balance'>
      
        <h4 >Your Balance</h4> 
        <button className='reset' onClick={()=>dispatch(resetTransactions())}>Clear</button>
      
    <h1 >
        ${amounts.reduce((total,amount) => total+amount,0)}
    </h1>
    </div>
  )
}
