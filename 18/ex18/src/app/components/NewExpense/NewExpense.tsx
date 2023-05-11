import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Expense from 'src/app/model/Expense';

interface NewExpenseProps {
    onAddExpense: (data: Expense) => void;
}

const NewExpense = ({ onAddExpense } : NewExpenseProps ) => {
    const saveExpenseDataHandler = (enteredExpenseData : Expense) => {
        const expenseData : Expense = {
            ...enteredExpenseData,
        };
        onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
