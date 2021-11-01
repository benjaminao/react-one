import React from 'react';

import ExpenseForm  from './ExpenseForm';

import './NewExpense.css';

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm 
                title="Benjamin y Annalise" 
                amount="10.01" 
                date="2021-10-08"
            />
        </div>
    );
}

export default NewExpense;