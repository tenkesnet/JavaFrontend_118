import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, amount, title }) {
    console.log("expenseitem")
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount} Ft</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;