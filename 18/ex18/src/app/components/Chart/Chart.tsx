import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

export type DataPoint = {
    label: string,
    value: number
}

const Chart = ({dataPoints} : {dataPoints : DataPoint[]}) => {
    const dataPointValues = dataPoints.map( (dataPoint: DataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((point:DataPoint) => (
                <ChartBar
                    key={point.label}
                    value={point.value}
                    maxValue={totalMaximum}
                    label={point.label}
                />
            ))}
        </div>
    );
};

export default Chart;