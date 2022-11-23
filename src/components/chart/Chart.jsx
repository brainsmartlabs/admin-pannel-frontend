import './Chart.scss';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        total: 4000,
    },
    {
        name: 'February',
        total: 3000,
    },
    {
        name: 'March',
        total: 2000,
    },
    {
        name: 'April',
        total: 2780,
    },
    {
        name: 'May',
        total: 1890,
    },
    {
        name: 'June',
        total: 2390,
    },
    {
        name: 'July',
        total: 3490,
    },
];


function Chart() {
    return (
        <div className='chart'>
            <div className="title">Last 6 months Revenue</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart