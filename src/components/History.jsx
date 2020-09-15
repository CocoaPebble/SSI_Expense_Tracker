import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import HistoryItem from './HistoryItem';
import EditCard from './EditCard';

export default function History() {
    const [showIncome, setShowIncome] = useState(true);
    const [showExpense, setShowExpense] = useState(true);

    const [displayEditCard, setDisplayEditCard] = useState(false);
    const [editCardInitState, setEditCardInitState] = useState({
        id: null,
        text: null,
        amount: null,
    });

    const { allTransactions } = useSelector((state) => state.transactions);

    return (
        <div>
            <h2 className="h2">History</h2>
            <div>
                <Checkbox
                    color="primary"
                    size="small"
                    checked={showIncome}
                    onChange={() => setShowIncome(!showIncome)}
                />
                <span>Show Income</span>
                <Checkbox
                    color="primary"
                    size="small"
                    checked={showExpense}
                    onChange={() => setShowExpense(!showExpense)}
                />
                <span>Show Expense</span>
            </div>
            <ul>
                {allTransactions
                    .filter((e) => {
                        if (e.amount >= 0 && showIncome) return true;
                        if (e.amount < 0 && showExpense) return true;
                        return false;
                    })
                    .map((e) => (
                        <HistoryItem
                            key={e.id}
                            data={e}
                            setDisplayEditCard={setDisplayEditCard}
                            setEditCardInitState={setEditCardInitState}
                        />
                    ))}
            </ul>

            {displayEditCard && (
                <EditCard
                    setDisplayEditCard={setDisplayEditCard}
                    initState={editCardInitState}
                />
            )}
        </div>
    );
}
