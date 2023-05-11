import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import Expense from "src/app/model/Expense"

const Expenses = ({ expenses } : {expenses: Expense[]}) => {
    const [filteredYear, setFilteredYear] = useState(2020);
    const filterChangeHandler = (filteredYear: number) => {
        setFilteredYear(filteredYear)
    }
    const filteredExpenses: Expense[] = expenses.filter(expense => expense.date.getFullYear() === filteredYear)
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}
export default Expenses;