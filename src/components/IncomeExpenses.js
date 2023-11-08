import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  let amounts = transactions.map(transaction=>transaction.amount)
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p  className='money plus'>${amounts.filter((value)=>value>0).reduce((total,amount)=>total+amount,0).toFixed(2)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>${Math.abs(amounts.filter((value)=>value<0).reduce((total,amount)=>total+amount,0)).toFixed(2)}</p>
        </div>
    </div>
  )
}
