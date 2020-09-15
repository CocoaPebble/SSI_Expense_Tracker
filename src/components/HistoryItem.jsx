import React from 'react';
import { Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../slicers/transactionSlicer';
import '../css/historyItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function HistoryItem({
    data,
    setDisplayEditCard,
    setEditCardInitState,
}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('delete?')) {
            dispatch(deleteTransaction(id));
        }
    };

    return (
        <>
            <li>
                <div className="historyItemContainer">
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
                    </Paper>
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="delBtn"
                        onClick={() => handleDelete(data.id)}
                    />
                    <FontAwesomeIcon
                        icon={faEdit}
                        className="editBtn"
                        onClick={() => {
                            setDisplayEditCard(true);
                            setEditCardInitState({
                                id: data.id,
                                text: data.text,
                                amount: data.amount,
                            });
                        }}
                    />
                </div>
            </li>
        </>
    );
}
