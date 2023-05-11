import React from 'react';

import Chart, { DataPoint } from '../Chart/Chart';
import Expense from 'src/app/model/Expense';

const ExpensesChart = ({expenses} : {expenses: Expense[]}) => {
    const chartDataPoints: DataPoint[] = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Már', value: 0 },
        { label: 'Ápr', value: 0 },
        { label: 'Máj', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Júl', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Szep', value: 0 },
        { label: 'Okt', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;