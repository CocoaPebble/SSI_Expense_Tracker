import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        allTransactions: [
            {
                id: 1,
                amount: 100,
                text: 'test1',
            },

            {
                id: 2,
                amount: 200,
                text: 'test2',
            },

            {
                id: 3,
                amount: -300,
                text: 'test3',
            },
        ],
    },

    reducers: {
        setAllTransaction: (state, action) => {
            return { ...state, allTransactions: action.payload };
        },

        addTransaction: (state, action) => {
            return {
                ...state,
                allTransactions: [...state.allTransactions, action.payload],
            };
        },

        deleteTransaction: (state, action) => {
            return {
                ...state,
                allTransactions: state.allTransactions.filter(
                    (e) => e.id !== action.payload
                ),
            };
        },
    },
});

export const {
    setAllTransaction,
    addTransaction,
    deleteTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
