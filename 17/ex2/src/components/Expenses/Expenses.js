import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear)
    }
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}
export default Expenses;