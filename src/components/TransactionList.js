import React from 'react'
import { Transaction } from './Transaction'
import { useSelector } from 'react-redux'

export const TransactionList = () => {
    const transactions = useSelector((state)=>state.transaction.transactions)
    let length = transactions.length
  return (
    <>
    <h3>
        History
    </h3>
    <ul  className='list'>{length===0?'Nothing to show, add a transaction.':transactions.map(transaction =>
      (<Transaction key={transaction.id}transaction={transaction}/>))}                
    </ul>
    
    </>
  )
}
