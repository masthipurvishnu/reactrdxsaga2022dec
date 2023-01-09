import React from "react"
import { Grid, ListItem } from '@mui/material';
import Counter from "./Counter";
import CounterClass from "./CounterClass";
import VButton from "../CustomHook/VButton";
import CustomForm from "../refs/CustomForm";
import ParentComponent from "../Parent";
import Child1 from "../Child1";
import Child2 from "../Child2";
const CounterComponent = () => {
    return (
        <>
            COUNTER
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid border={'1px solid red'} margin={2} item xs>
                    <CounterClass />
                </Grid>
                <Grid border={'1px solid red'} margin={2}
                    item xs={4}>
                    <Counter />
                </Grid>
                <Grid border={'1px solid red'} margin={2}
                    item xs>
                    <div>
                        <VButton />
                        <CustomForm />
                    </div>
                </Grid>
            </Grid>
            <div style={{ display: 'inline-block', border: '1px solid red', margin: '20px' }}>
                <ParentComponent flag={true} />
            </div>
            <div style={{ display: 'inline-block', border: '1px solid green' }}>
                <ParentComponent flag={false} >
                    <Child1 name={'Raja'} />
                    <Child2 location={'Irving'} />
                </ParentComponent>
            </div></>
    )
}
export default CounterComponent