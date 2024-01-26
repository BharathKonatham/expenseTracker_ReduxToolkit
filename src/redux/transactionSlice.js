import { createSlice } from '@reduxjs/toolkit'


export const transactionSlice = createSlice({
  name: 'transaction',
  initialState:{
    transactions: []
  },
  reducers: {
    deleteTransaction: (state,action) => {
        state.transactions=state.transactions.filter(transactions=>transactions.id !== action.payload)
    },
    AddNewTransaction: (state,action) => {
    
        state.transactions = [action.payload,...state.transactions]
        
    },
    resetTransactions: (state) => {
        
            
        state.transactions= []
        
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { deleteTransaction, AddNewTransaction, resetTransactions } = transactionSlice.actions

export default transactionSlice.reducer