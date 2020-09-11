import React from 'react';
import { useSelector } from 'react-redux';
import HistoryItem from './HistoryItem';

export default function History() {
    const { allTransactions } = useSelector((state) => state.transactions);
    return (
        <div>
            <h2 className="h2">History</h2>
            <ul>
                {allTransactions.map((e) => (
                    <HistoryItem key={e.id} data={e} />
                ))}
            </ul>
        </div>
    );
}
