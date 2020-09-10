import React from 'react';
import { useSelector } from 'react-redux';

export default function History() {
    const { allTransactions } = useSelector((state) => state.transactions);
    return (
        <div>
            <ul>
                {allTransactions.map((t) => {
                    return (
                        <li key={t.id}>
                            text: {t.text} --- amount: {t.amount}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
