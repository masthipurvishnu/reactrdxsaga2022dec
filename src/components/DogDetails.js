import React, { useContext } from 'react'
import { Card, CardContent } from '@mui/material'

import { CountContext } from '../App'
import { connect } from 'react-redux'
const DogDetails = (props) => {
    const name = useContext(CountContext)
    const cardStyles = {
        textAlign: 'center',
        height: '200px',
        width: '600px',
        margin: '10px'
    }
    const divStyle = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <>
            <div style={divStyle}>
                <Card sx={{
                    fontSize: 14, border: '1px solid red', textAlign: 'center'
                }}
                    style={cardStyles}
                >
                    <div>Dog details </div>
                    <CardContent sx={{ fontSize: 12 }}>Name: {name}</CardContent>
                </Card>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        dog: state.dog
    }

}
export default connect(mapStateToProps, null)(DogDetails)