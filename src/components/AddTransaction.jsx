import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import '../App.css'

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors);

    return (
        <div className='container'>
            <h2 className='h2'> Add New Transaction</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className='textfield'
                    id="description"
                    label="Description"
                    type="text"
                    name="Descriptions"
                    inputRef={register({ required: true, maxLength: 80 })}
                />

                <TextField
                    className='textfield'
                    id="amount"
                    label="Amount"
                    prefix="$"
                    type="text"
                    name="Amount"
                    inputRef={register({ required: true, maxLength: 100, pattern: /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/i })}
                />
                <p></p>
                <Button className='btn-submit' type="submit" variant="contained" color="primary"> Add </Button>
            </form>
        </div>
    );
}