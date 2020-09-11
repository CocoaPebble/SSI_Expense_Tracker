import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../slicers/transactionSlicer';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { v4 as uuidV4 } from 'uuid';
import '../css/addTransaction.css';

export default function App() {
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = useCallback(
        (data, event) => {
            data.amount = +data.amount;
            data.id = uuidV4();
            dispatch(addTransaction(data));
            // clean form
            event.target[0].value = '';
            event.target[1].value = '';
        },
        [dispatch]
    );

    return (
        <div className="addTransactionContainer">
            <h2 className="h2"> Add New Transaction</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className="textField"
                    id="description"
                    label="Text"
                    type="text"
                    name="text"
                    inputRef={register({
                        required: true,
                        maxLength: 80,
                    })}
                    error={!!errors.text}
                    helperText={!!errors.text && 'Invalid'}
                />

                <TextField
                    className="textField"
                    id="amount"
                    label="Amount"
                    type="text"
                    name="amount"
                    inputRef={register({
                        required: true,
                        maxLength: 100,
                        pattern: /^[+-]?([0-9]+([.][0-9]{1,2})?|[.][0-9]{1,2})$/i,
                    })}
                    error={!!errors.amount}
                    helperText={!!errors.amount && 'Invalid'}
                />
                <div className="submitContainer">
                    <Button
                        className="btn-submit"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
}
