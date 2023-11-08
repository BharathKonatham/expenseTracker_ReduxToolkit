import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    let length = transactions.length
  return (
    <>
    <h3>
        History
    </h3>
    <ul  className='list'>{length===0?'Nothing to show, add a transaction.':transactions.map(transaction =>(<Transaction key={transaction.id}transaction={transaction}/>))}
        
        
    </ul>
    
    </>
  )
}
