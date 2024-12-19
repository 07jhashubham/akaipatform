'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts'
import { FC, useState } from 'react'

interface TelemetryProps { }

const CustomGauge = ({ value, color, size = 250 }) => {
    // Convert percentage to a number between 0-1
    const percentage = value / 100;

    // Create data for the gauge
    const data = [
        { value: percentage },
        { value: 1 - percentage }, // Remaining space
    ];

    // Set angles for a full circle
    const startAngle = 90; // Starting at the top
    const endAngle = -270; // Completing a full circle clockwise

    return (
        <PieChart width={size} className='mx-auto' height={size}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={size / 3}
                outerRadius={size / 2}
                cornerRadius={0}
                paddingAngle={0}
                dataKey="value"
            >
                <Cell fill={color} />
                <Cell fill="#CDCDCD" /> {/* Background color */}
            </Pie>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xl font-bold"
            >
                {`${value}%`}
            </text>
        </PieChart>
    );
};


const Telemetry: FC<TelemetryProps> = ({ }) => {
    const [chartData] = useState([
        { name: 'Level 1', value: 4800, fill: '#FF1231' },
        { name: 'Level 2', value: 2900, fill: '#B3001B' },
        { name: 'Level 3', value: 4200, fill: '#8B0016' },
        { name: 'Level 4', value: 4500, fill: '#660011' },
        { name: 'Level 5', value: 5000, fill: '#FF1231' },
    ]);
const [taskProgress, settaskProgress] = useState<number>(78);
const [dataProgress, setdataProgress] = useState({
    value:70,
    progress:14,
    labelled:30,
    pending:40
})
    return (
        <div className='w-full'>
            <p className='font-rexlia lg:mt-5 lg:ml-10 lg:text-2xl'>Telemetry Dashboard</p>
            <BarChart
                width={700}
                height={400}
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 30, left: 50 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    fontSize={14}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    fontSize={14}
                    domain={[0, 5000]}
                    ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                />
                <Tooltip />
                <Bar dataKey="value" radius={[5, 5, 0, 0]} barSize={60}>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
            <div className='flex w-full mt-5 border-t border-b border-gray-500'>
                <div className=' mx-auto border-r border-gray-500 w-[40%]'>
                    <p className='font-rexlia lg:my-3 text-center lg:text-xl'>Task Progress</p>
                    <CustomGauge value={taskProgress} color="#CF0B21" size={300} />
                </div>
                <div className=' w-[60%]'>
                    <p className='font-rexlia lg:mt-3 text-center lg:text-xl'>Dataset Progress</p>
                    <div className='flex items-center gap-4 mb-4 justify-evenly'>
                        <div>
                            <CustomGauge value={dataProgress.value} color="#5A5A5A" size={250} />
                            <p className='font-rexlia lg:mt-5 text-center lg:text-base'>Dataset: A</p>
                            <p className='text-[#122BCD] lg:mt-5 text-center lg:text-base'>In progress: {dataProgress.progress}%</p>
                            <p className='text-[#17C41A] text-center lg:text-base'>Labeled: {dataProgress.labelled}%</p>
                            <p className='text-[#FF1231] text-center lg:text-base'>Pending: {dataProgress.pending}%</p>
                        </div>
                        <div>
                            <CustomGauge value={dataProgress.value} color="#252525" size={250} />
                            <p className='font-rexlia lg:mt-5 text-center lg:text-base'>Dataset: B</p>
                            <p className='text-[#122BCD] lg:mt-5 text-center lg:text-base'>In progress: {dataProgress.progress}%</p>
                            <p className='text-[#17C41A] text-center lg:text-base'>Labeled: {dataProgress.labelled}%</p>
                            <p className='text-[#FF1231] text-center lg:text-base'>Pending: {dataProgress.pending}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Telemetry;