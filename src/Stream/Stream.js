import React, { useEffect, useState } from "react";
import RealTimeData from "./RealTimeData";

const Stream = () => {
    const [data, setData] = useState('vv')
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3100/readstream')
            const data = await res.json()
            setData({ data: data })
        }
        fetchData()
    }, [])
    return (
        <>
            <div style={{ margin: 20 }}>
                <h3>{'Stream data'}</h3>
                <span>{data}</span>
                <div>
                    <RealTimeData />
                </div>

            </div>
        </>
    )
}
export default Stream