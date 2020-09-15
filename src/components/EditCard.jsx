import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editTransaction } from '../slicers/transactionSlicer';
import '../css/editCard.css';

export default function EditCard({ setDisplayEditCard, initState }) {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const submitEditForm = (data) => {
        dispatch(
            editTransaction({
                id: initState.id,
                text: data.text,
                amount: +data.amount,
            })
        );
        setDisplayEditCard(false);
    };

    return (
        <div
            className="editCardContainer"
            onClick={(e) => {
                if (e.target.className === 'editCardContainer')
                    setDisplayEditCard(false);
            }}
        >
            <Paper className="formContainer">
                <form
                    className="editCardForm"
                    onSubmit={handleSubmit(submitEditForm)}
                >
                    <span onClick={() => setDisplayEditCard(false)}>
                        &times;
                    </span>
                    <TextField
                        label="Text:"
                        type="text"
                        name="text"
                        inputRef={register({
                            required: true,
                            maxLength: 80,
                        })}
                        defaultValue={initState.text}
                    />

                    <TextField
                        label="Amount"
                        type="text"
                        name="amount"
                        inputRef={register({
                            required: true,
                            maxLength: 100,
                            pattern: /^[+-]?([0-9]+([.][0-9]{1,2})?|[.][0-9]{1,2})$/i,
                        })}
                        defaultValue={initState.amount}
                    />
                    <p style={{ color: 'red' }}>
                        {!!errors.amount || !!errors.text ? 'Error' : ''}
                    </p>
                    <Button type="submit" variant="contained" color="primary">
                        Change
                    </Button>
                </form>
            </Paper>
        </div>
    );
}
