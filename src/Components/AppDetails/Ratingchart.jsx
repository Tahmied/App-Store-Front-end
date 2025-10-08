import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ratingsData = [
    { name: '1 star', value: 800 },
    { name: '2 star', value: 1800 },
    { name: '3 star', value: 2800 },
    { name: '4 star', value: 6200 },
    { name: '5 star', value: 10800 },
];

const RatingsChart = () => {
    return (
        <div className="ratings-chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={ratingsData}
                    layout="vertical"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis type="number" axisLine={false} tickLine={false} />

                    <YAxis
                        type="category"
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip cursor={{ fill: 'transparent' }} />

                    <Bar
                        dataKey="value"
                        fill="#FF8042"
                        barSize={30}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default RatingsChart;