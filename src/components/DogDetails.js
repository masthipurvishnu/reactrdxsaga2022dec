import React, { createContext, useContext } from 'react'
import { Card, CardContent } from '@mui/material'

import { CountContext } from '../App'
const DogDetails = (props) => {
    const imageUrl = useContext(CountContext)
    const cardStyles = {
        textAlign: 'center',
        height: '200px',
        width: '600px',
        margin: '10px'
    }
    const divStyle = {
        textAlign: 'center'
    }
    console.log(imageUrl);
    return (
        <>
            <div style={divStyle}>
                <Card sx={{ fontSize: 14, border: '1px solid red', textAlign: 'center' }}
                    style={cardStyles}
                >
                    <div>Dog details </div>

                    <CardContent sx={{ fontSize: 12 }}>URL: {imageUrl}</CardContent>
                </Card>
            </div>
        </>
    )
}

export default DogDetails