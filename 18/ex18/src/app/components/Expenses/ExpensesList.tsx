import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import Expense from 'src/app/model/Expense';

const ExpensesList = ({ items } : {items: Expense[]}) => {

    if (items.length === 0) {
        return <h2 className='expenses-list__fallback'>Nem találtam költségtételt.</h2>;
    }
    return (
        <ul className='expenses-list'>
            {items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    item={expense}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;