import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
const Expenses = ({ expenses }) => {

    return (
        <Card className="expenses">
            {
                expenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                )
                // expenses.map(function (expense) {
                //     let id = Math.random().toString()
                //     return (
                //         <ExpenseItem
                //             key={id}
                //             title={expense.title}
                //             amount={expense.amount}
                //             date={expense.date}
                //         ></ExpenseItem>
                //     )
                // })
            }
        </Card>
    )
}
export default Expenses;