import React, { Component, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import CPUUsage from './CPUUsage';

const socket = io('http://localhost:4000/')

const SocketIOClient = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        socket.on('cpu', (usage) => {
            setValue(usage.value * 100)
            console.log('Cpu usage - ', usage.value);
        })
    }, [])
    return (
        <>
            <div>
                <h3>{'Socket IO Client'}</h3>
                <div>{'CPU Usage'}</div>
                <div style={{
                    border: '2px solid orange',
                    borderRadius: 5,
                    height: 50,
                    width: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}><strong>{value}</strong></div>
            </div>
            <CPUUsage />
        </>
    );
}

export default SocketIOClient;