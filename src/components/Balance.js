import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  let amounts = transactions.map(transaction=>transaction.amount)
  return (
    <div className='balance'>
    <h4>Your Balance</h4>
    <h1 >
        ${amounts.reduce((total,amount) => total+amount,0)}
    </h1>
    </div>
  )
}
