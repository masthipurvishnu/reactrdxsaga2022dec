import { Box, Card, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import Tile from "./Tile";
const Shop = () => {
    const [items, setItems] = useState(null)
    const [filteredItems, setfilteredItems] = useState(null)
    const dispatch = useDispatch()
    const products = useSelector(state => state.shopReducer.products)
    useState(() => {
        dispatch({ type: 'GET_PRODUCTS_LIST' })
        console.log(products?.length);
        setItems(products)
        setfilteredItems(products)
    }, [])
    const handleChangeFilter = (value) => {
        const fItems = items?.filter(item => Math.round(item.rating.rate) >= value)
        setfilteredItems(fItems)
    }
    return (
        <>
            <h1>Shopping List</h1>
            <Box sx={{ display: 'block', p: 2, border: '0px solid red' }}>
                <Filter onChangeFilter={handleChangeFilter} />
            </Box>
            <Grid container spacing={{ xs: 0 }}>
                {filteredItems?.length > 0 ?
                    <>
                        {filteredItems.map((item, i) => {
                            return (
                                <Grid item xs={2} key={i} sx={{ margin: 2 }}>
                                    <Tile item={item}></Tile>
                                </Grid>
                            )
                        })
                        }
                    </>
                    :
                    <>No Products avaialable</>
                }
            </Grid>
        </>
    )
}
export default Shop