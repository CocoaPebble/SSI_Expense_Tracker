import React from 'react';
import { Paper } from '@material-ui/core';
import '../css/historyItem.css';

export default function HistoryItem({ data }) {
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
                    <button>del</button>
                </Paper>
            </li>
        </>
    );
}
