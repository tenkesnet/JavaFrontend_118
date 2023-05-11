import React, { ChangeEvent, FormEvent, useState } from 'react';

import './ExpenseForm.css';
import Expense from 'src/app/model/Expense';

interface ExpenseFormProps {
    onSaveExpenseData: (data: Expense) => void;
}

const ExpenseForm = ({ onSaveExpenseData } :ExpenseFormProps) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    //console.log(userInput)

    const titleChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        //Az ascync viselkedés miatti állapotvédelem
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(parseInt(event.target.value));
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const expenseData: Expense = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        onSaveExpenseData(expenseData)
        setEnteredAmount(0)
        setEnteredTitle('')
        setEnteredDate('')

    }

    return (
        <form onSubmit={onSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' name="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
