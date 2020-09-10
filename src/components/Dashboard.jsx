import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const { allTransactions } = useSelector((state) => state.transactions);

    const totalAmount = useMemo(() => {
        return allTransactions.reduce((prev, cur) => {
            return prev + cur.amount;
        }, 0);
    }, [allTransactions]);

    return <div>Total : {totalAmount}</div>;
}
