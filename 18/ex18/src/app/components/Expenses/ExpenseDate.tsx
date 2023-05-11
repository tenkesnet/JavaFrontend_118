import { FC } from 'react';
import './ExpenseDate.css';

export type ExpenseDateProps = {
  date: Date;
}

const ExpenseDate = ({date} : ExpenseDateProps) => {
    const month = date.toLocaleString('hu-HU', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;