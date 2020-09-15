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
            console.log(state.allTransactions);
            return {
                ...state,
                allTransactions: state.allTransactions.filter(
                    (e) => e.id !== action.payload
                ),
            };
        },

        editTransaction: (state, action) => {
            return {
                ...state,
                allTransactions: state.allTransactions.map((e) => {
                    if (e.id === action.payload.id) {
                        return {
                            id: action.payload.id,
                            text: action.payload.text,
                            amount: action.payload.amount,
                        };
                    }
                    return e;
                }),
            };
        },
    },
});

export const {
    setAllTransaction,
    addTransaction,
    deleteTransaction,
    editTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
