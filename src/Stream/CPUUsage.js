import React, { useEffect, useState } from 'react';
import { CartesianGrid, Label, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000/', {
    transports: ['websocket', 'polling']
})
const usageStyles = {
    border: '2px solid orange',
    borderRadius: 5,
    width: 400,
    float: 'left',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50

}
const chartStyles = {
    border: '2px solid green',
    borderRadius: 5,
    display: 'flex',
    width: 700,
    height: 500,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
}
const CPUUsage = () => {
    /*1. list the cpu event and update the state
    2. render the line chart using the state
    */
    const [data, setData] = useState([])
    useEffect(() => {
        socket.on('cpu', (usage) => {
            console.log(usage.value);
            setData(currentData => [...currentData, usage])
        })
    }, [])
    return (
        <>
            <div >{'CPU USAGE COMPONENT'} </div>
            <h4>{'Real Time CPU Usage'} </h4>
            <div style={usageStyles}>
                <ul>
                    {data?.length > 0 ? data.map((item, index) => {
                        return (
                            <li key={index}>{index} - {item.value}</li>
                        )
                    }) :
                        <>{'No data avaialable'}</>
                    }
                </ul>
            </div>
            <div style={chartStyles}>
                {/* https://recharts.org/en-US */}
                <LineChart width={600} height={400} data={data}>
                    <XAxis dataKey="name" >
                        <Label value={'Time ticks'} offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label style={{ paddingTop: 10 }} value={'Usage %'} offset={0} position="insideLeft" />
                    </YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey='value' stroke="#8884d8" />
                </LineChart>

            </div>
        </>
    );
}

export default React.memo(CPUUsage);