import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';

export default function Dashboard() {
    const { allTransactions } = useSelector((state) => state.transactions);

    const totalAmount = useMemo(() => {
        return allTransactions.reduce((prev, cur) => {
            return prev + cur.amount;
        }, 0);
    }, [allTransactions]);

    return <Paper>Total : {totalAmount}</Paper>;
}
