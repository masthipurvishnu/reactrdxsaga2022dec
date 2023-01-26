import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeRates = () => {
    const dispatch = useDispatch()
    const rates = useSelector(state => state.exchangeRatesRecuder.rates)
    const handleBtnClick = () => {
        dispatch({ type: 'GET_EXCHANGERATES_REQUEST' })
    }

    return (
        <>
            <h1>Exchange Rates</h1>
            <Button onClick={handleBtnClick}>Get Rates</Button>
            {rates ?
                <>
                    <div>{JSON.stringify(rates)}</div>
                </>
                :
                <>
                    <div>No records</div>
                </>
            }
        </>
    )
}
export default ExchangeRates
