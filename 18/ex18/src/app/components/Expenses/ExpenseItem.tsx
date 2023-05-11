import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import Expense from 'src/app/model/Expense';



function ExpenseItem({ item } : {item : Expense}) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={item.date} />
            <div className='expense-item__description'>
                <h2>{item.title}</h2>
                <div className='expense-item__price'>{item.amount} Ft</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;