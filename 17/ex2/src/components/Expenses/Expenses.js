import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
const Expenses = ({ expenses }) => {

    return (
        <Card className="expenses">
            <ExpensesFilter />
            {
                expenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                )
            }
        </Card>
    )
}
export default Expenses;