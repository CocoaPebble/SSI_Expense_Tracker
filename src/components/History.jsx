import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import HistoryItem from './HistoryItem';
import EditCard from './EditCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import '../css/history.css';

export default function History() {
    const [showIncome, setShowIncome] = useState(true);
    const [showExpense, setShowExpense] = useState(true);
    const [sortState, setSortState] = useState(0);

    const [displayEditCard, setDisplayEditCard] = useState(false);
    const [editCardInitState, setEditCardInitState] = useState({
        id: null,
        text: null,
        amount: null,
    });

    const { allTransactions } = useSelector((state) => state.transactions);

    const changeSortState = () => {
        setSortState((sortState + 1) % 3);
    };

    const displayHistoryList = useMemo(() => {
        const filterTransactions = allTransactions.filter((e) => {
            if (e.amount >= 0 && showIncome) return true;
            if (e.amount < 0 && showExpense) return true;
            return false;
        });

        switch (sortState) {
            case 0:
                return filterTransactions;
            case 1:
                return filterTransactions.sort((a, b) => a.amount - b.amount);
            case 2:
                return filterTransactions.sort((a, b) => b.amount - a.amount);

            default:
                return filterTransactions;
        }
    }, [showIncome, showExpense, sortState, allTransactions]);

    return (
        <div>
            <h2 className="h2">History</h2>
            <div className="funcBar">
                <div>
                    <Checkbox
                        color="primary"
                        size="small"
                        checked={showIncome}
                        onChange={() => setShowIncome(!showIncome)}
                    />
                    <span>Show Income</span>
                </div>

                <div>
                    <Checkbox
                        color="primary"
                        size="small"
                        checked={showExpense}
                        onChange={() => setShowExpense(!showExpense)}
                    />
                    <span>Show Expense</span>
                </div>

                <FontAwesomeIcon
                    icon={faSort}
                    className="sortBtn"
                    onClick={changeSortState}
                    title="sort"
                />
            </div>
            <ul>
                {displayHistoryList.map((e) => (
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
