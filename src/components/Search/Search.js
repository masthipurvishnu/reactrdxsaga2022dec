import { Autocomplete, Grid, Paper, styled, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledComponent } from "styled-components";
import ExchangeRates from "../../ExchangeRates/ExchangeRates";
import ButtonItem from "../CustomHook/ButtonItem";
import Main from "../HOC-Ex/Main";

const Search = (props) => {
    const style = {
        border: '2px solid green',
        height: 450,
        margin: 'auto'
    }
    const hocStyle = {
        border: '1px solid red',
        width: 1000,
        margin: 5
    }
    const styleAutocomplete = {
        border: '0px solid green',
        margin: 'auto'
    }
    const style3 = {
        border: '0px solid green',
        margin: 'auto'
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto'
    }));
    // const GridContainer = styled.div`
    //         border: 1px solid gray
    // `
    const data = [{ name: 'Vishnu', location: 'Plano' }, { name: 'Raja', location: 'Irving' }]
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const items = useSelector(state => state.searchReducer)
    // this filter works
    // const items = items1 != {} && items1.items?.filter(item => item?.address?.city === "Gwenborough")

    useEffect(() => {
        dispatch({ type: 'SEARCH_ITEMS_RETRIEVE' })
    }, [])
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <Grid container spacing={{}} >
                <Grid>
                    <Item>
                        {items?.items &&
                            <div style={style}>
                                <h1>Search Component</h1>
                                <Autocomplete
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    style={styleAutocomplete}
                                    id="search-box1"
                                    options={items.items}
                                    sx={{ width: 300 }}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(param) => <TextField {...param} label='name' />}
                                />
                                <h1>
                                    Results for '{inputValue}'
                                </h1>
                                <Stack spacing={2}>
                                    {items?.items && items.items.map(el => {
                                        if (el.name !== inputValue) return
                                        return (
                                            <Item key={el.id}>
                                                {JSON.stringify(el)}
                                            </Item>
                                        )
                                    })}
                                </Stack>

                                <ButtonItem />
                            </div>
                        }</Item>
                    <Item>
                        <ExchangeRates />
                    </Item>
                </Grid>
                <Grid style={hocStyle}>
                    <Item>
                        <Main />
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}
export default Search