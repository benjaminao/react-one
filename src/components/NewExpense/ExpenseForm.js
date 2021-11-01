import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title);
    const [enteredAmount, setEnteredAmount] = useState(props.amount);
    const [enteredDate, setEnteredDate] = useState(props.date);
    
    const titleChangeHandler = (event) => {
        console.log('titleChangeHandler ', event.target.value);
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        console.log('amountChangeHandler ', event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        console.log('dateChangeHandler ', event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log('expenseData ', expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;