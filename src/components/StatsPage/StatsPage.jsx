import React, { useContext } from 'react';
import { FriendProvider } from '../../Contexts/Contexts';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { call, text, video } = useContext(FriendProvider);

    const data = [
        { name: "Text", value: text.length },
        { name: "Call", value: call.length },
        { name: "Video", value: video.length }
    ];

    const COLORS = ["#7C3AED", "#1D3D33", "#2F9E44"];

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="w-10/12 mx-auto">

                <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-lg font-medium mb-4 text-gray-700">
                        By Interaction Type
                    </h2>

                    <div className="w-full h-[300px]">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                        ))
                                    }
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;