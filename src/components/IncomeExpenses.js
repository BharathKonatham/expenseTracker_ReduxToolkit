import React from 'react'

import { useSelector } from 'react-redux'

export const IncomeExpenses = () => {
  //const {transactions} = useContext(GlobalContext)
  const transactions = useSelector((state)=>state.transaction.transactions)
  
  let amounts = transactions.map(transaction=>transaction.amount)
  let Income = amounts.filter((value)=>value>0).reduce((total,amount)=>total+amount,0).toFixed(2)
  let Expense = Math.abs(amounts.filter((value)=>value<0).reduce((total,amount)=>total+amount,0)).toFixed(2)
  return (
    <>
     <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p  className='money plus'>${Income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>${Expense}</p>
        </div>
    </div>
    { Expense > Income ? <h5 style={{color:'red'}}>Expenses are greater than Income</h5>:'' }
    </>
   
  )
}
