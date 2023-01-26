import { Card, Grid, TableCell, TableRow, Typography } from "@mui/material"
import { Box } from "@mui/system"
import CatsComponent from "../components/ModuleTest/CatsFComponent"
import module2Fun from "../components/ModuleTest/module2"
import module3Fun from "../components/ModuleTest/module3"
import FunComponent1 from "../components/ModuleTest/setStateTest"
const About = () => {
    return (
        <>
            <h2>About</h2>
            <Box>
                <Card>
                    <Grid container>
                        <Grid xs={4}>
                            <Card>
                                <div>{JSON.stringify(module2Fun())}</div>
                                <div>{JSON.stringify(module3Fun())}</div>
                                <FunComponent1 />
                            </Card>
                        </Grid>
                        <Grid xs={3} sx={{ margin: 5 }}>
                            <CatsComponent />

                        </Grid>
                        <Grid xs={3} sx={{ margin: 5 }}>
                            <Card >
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    )
}
export default About