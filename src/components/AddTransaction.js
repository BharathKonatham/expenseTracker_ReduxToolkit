import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddNewTransaction } from '../redux/transactionSlice'

export const AddTransaction = () => {
    const [text,setText] = useState('')
    const[amount,setAmount] = useState('')
    const dispatch = useDispatch()
    const [buttonState,setbuttonState] = useState({
      incomeStatus: '',
      expenseStaus:'',
      type: ''
    })
    const onSubmit = (e)=>{
      e.preventDefault()
      const newTransaction = {
        id:Math.floor(Math.random()*1000000),
        amount:buttonState.type ==='positive'? parseInt(amount, 10): -parseInt(amount, 10),
        text 
      }
      setAmount('')
      setText('')
      setbuttonState({
        expenseStaus: '',
        incomeStatus: '',
        type: ''
      })
      dispatch(AddNewTransaction(newTransaction))
    }
    const setButtonsPositive = (e)=>{
      e.preventDefault()
      setbuttonState({
        expenseStaus:'',
        incomeStatus: buttonState.incomeStatus === 'active'? '':'active',
        type: buttonState.type === 'positive'? '':'positive'
      })
    }
    const setButtonsNegative = (e)=>{
      e.preventDefault()
      setbuttonState({
        incomeStatus:'',
        expenseStaus: buttonState.expenseStaus === 'active'? '':'active',
        type: buttonState.type === 'negative'? '':'negative'
      })
    }
   
  const isDisabled = ((text.length === 0 || amount.length === 0 || buttonState.type.length === 0 || amount <= 0))?true:false;
  console.log(isDisabled)
  return (
    <>
    <h3>Add new transaction</h3>
    <form>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' placeholder='Enter text...' value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>Amount </label>
            <div className='transButtons'>
            <button className={`income Tbutton ${buttonState.incomeStatus}`} onClick={setButtonsPositive} >Income</button> 
            <button className={`income Tbutton ${buttonState.expenseStaus}`} onClick={setButtonsNegative} >Expense</button>
            </div>
            <input type='number' placeholder='Enter Amount...' value={amount} onChange={e => {setAmount(e.target.value)}} />
        </div>
        <div className='form-control'>
          <button className={`btn ${isDisabled?'disabled':''}`} onClick={ onSubmit} disabled={isDisabled}>Add Transaction</button>
        </div>
    </form>
    </>
  )
}
