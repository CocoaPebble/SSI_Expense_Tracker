import React from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../slicers/transactionSlicer';

export default function AddTransaction() {
    const dispatch = useDispatch();
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addTransaction({
                            id: Math.random(),
                            [e.target[0].name]: e.target[0].value,
                            [e.target[1].name]: +e.target[1].value,
                        })
                    );
                }}
            >
                <label>
                    <input
                        type="text"
                        name="text"
                        placeholder="input text"
                        required
                    />
                </label>
                <label>
                    <input type="number" name="amount" required />
                </label>
                <button>add</button>
            </form>
        </div>
    );
}
