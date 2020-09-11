import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import '../css/dashboard.css';

export default function Dashboard() {
    const { allTransactions } = useSelector((state) => state.transactions);

    const [totalAmount, income, expense] = useMemo(() => {
        let total = 0,
            income = 0,
            expense = 0;

        allTransactions.forEach((element) => {
            total += element.amount;
            if (element.amount >= 0) {
                income += element.amount;
            } else {
                expense += element.amount;
            }
        });
        return [total, income, expense];
    }, [allTransactions]);

    return (
        <div className="dashboardContainer">
            <h1> Expense Tracker</h1>
            <div>
                <h2>Balance :</h2>
                <div>{totalAmount}</div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <Paper style={{ flexBasis: '50%' }}>
                    <h3>Income :</h3>
                    <div>{income}</div>
                </Paper>
                <Paper style={{ flexBasis: '50%' }}>
                    <h3>Expanse :</h3>

                    <div>{expense}</div>
                </Paper>
            </div>
        </div>
    );
}
