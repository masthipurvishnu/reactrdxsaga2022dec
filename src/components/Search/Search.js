import { Autocomplete, Grid, Paper, styled, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = (props) => {
    const style = {
        border: '1px solid brown',
        height: 450,
        margin: 'auto'
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
        width: 600,
        margin: 'auto'
    }));
    const data = [{ name: 'Vishnu', location: 'Plano' }, { name: 'Raja', location: 'Irving' }]
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const items = useSelector(state => state.searchReducer)
    console.log(items.items);
    // const items = items1 && items1?.filter(x => x?.address?.city === 'Gwenborough')

    // console.log(items);
    useEffect(() => {
        dispatch({ type: 'SEARCH_ITEMS_RETRIEVE' })
    }, [])
    const [inputValue, setInputValue] = useState('');
    return (
        <>
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
                </div>
            }
        </>
    )
}
export default Search