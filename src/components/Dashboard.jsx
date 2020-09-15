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
                <h2 style={{ display: 'inline' }}>Balance: </h2>
                <span data-testid="jestTest" style={{ fontSize: '25px' }}>
                    ${totalAmount}
                </span>
            </div>
            <Paper elevation={3} className="paper">
                <div
                    className="paperItem"
                    style={{
                        borderRight: '1px #ddd solid',
                    }}
                >
                    <h3>INCOME</h3>
                    <div style={{ color: 'green' }}>${income}</div>
                </div>
                <div className="paperItem">
                    <h3>EXPENSE</h3>
                    <div style={{ color: 'red' }}>${expense}</div>
                </div>
            </Paper>
        </div>
    );
}
