import React from 'react';
import { Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../slicers/transactionSlicer';
import '../css/historyItem.css';

export default function HistoryItem({ data }) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('delete')) {
            dispatch(deleteTransaction(id));
        }
    };

    return (
        <>
            <li>
                <Paper
                    className="historyItem"
                    style={{
                        borderRight:
                            data.amount < 0
                                ? '3px #f00 solid'
                                : '3px #0f0 solid',
                    }}
                    square
                >
                    <div>{data.text}</div>
                    <div>{data.amount}</div>
                    <button onClick={() => handleDelete(data.id)}>del</button>
                </Paper>
            </li>
        </>
    );
}
