import React, { useEffect, useRef, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { SettingsSharp } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { detectHover1 } from '../../components/HOC-DetectHover';
import Star from './Star';
const Filter = (props) => {
    const [rateElement, setRateElement] = useState([])
    const [rating, setRating] = useState(5)
    const [filterValue, setFilterValue] = useState(0)
    const rateRef = useRef(5)
    const handleRateChange = (value) => {
        props.onChangeFilter(parseInt(value))
        setFilterValue(value)
    }
    const getRates = (item) => {
        const rate = 5 // Math.round(item.rating.rate)
        let rateElement = []
        for (let i = 1; i <= rate; i++) {
            let filterClolor = 'gray'
            const styles = {
                color: filterClolor,
                width: '2%',
                height: '2%'
            }
            if (filterValue === 0 || filterValue >= i) {
                filterClolor = 'red'
            }
            // rateElement.push(<StarIcon key={i} style={styles} />)
            rateElement.push(<Star style={{ display: 'inline', border: '3px solid green' }}
                color={filterClolor}
                key={i} rateNumber={i}
                handleHover={handleRateChange} />)
        }
        // rateElement.push(<Chip style={{ width: '15%', height: '10%', marginBottom: 8 }} label={rate} variant="outlined"></Chip>)
        setRateElement(rateElement)
        return rateElement
    }
    const handleChange = (e) => {
        // console.log(rateElement.length, parseInt(e.target.value));
        const x = rateElement.slice(0, parseInt(e.target.value))
        props.onChangeFilter(parseInt(e.target.value))
    }
    useEffect(() => {
        getRates()
    }, [filterValue])
    return (
        <>
            <div style={{ textAlign: 'center', border: '0px solid red' }}>
                <div>
                    <strong>{'Filters : Rating '}</strong>
                    <div style={{ border: '1px solid red' }}>{rateElement.map(el => el)}</div>
                    <select
                        onChange={handleChange}
                        style={{ height: 40, magin: 25 }}>
                        {rateElement?.map((rate, i) =>
                            <option>{i + 1}</option>
                        )}
                    </select>
                </div>
            </div>
        </>
    )
}
export default Filter