import React from 'react'
import { deleteTransaction } from '../redux/transactionSlice'
import { useDispatch } from 'react-redux'

export const Transaction = ({transaction}) => {
  
  const dispatch = useDispatch()
  //const {deleteTransaction} = useContext(GlobalContext)


  
  return (
    <li className={transaction.amount<0?'minus':'plus'}>
      {transaction.text}<span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span>
      <button className='delete-btn' onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button></li>
  )
}
