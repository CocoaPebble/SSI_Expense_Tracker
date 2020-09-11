import React from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../slicers/transactionSlicer';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import '../css/addTransaction.css';

export default function App() {
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, event) => {
        data.amount = +data.amount;
        data.id = Math.random();
        dispatch(addTransaction(data));
        console.log(data);
        // clean form
        event.target[0].value = '';
        event.target[1].value = '';
    };

    return (
        <div className="addTransactionContainer">
            <h2 className="h2"> Add New Transaction</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className="textfield"
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
                    className="textfield"
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
