import { Card, Grid, TableCell, TableRow, Typography } from "@mui/material"
import { Box } from "@mui/system"
import CatsComponent from "../components/ModuleTest/CatsFComponent"
import module2Fun from "../components/ModuleTest/module2"
import module3Fun from "../components/ModuleTest/module3"
import FunComponent1 from "../components/ModuleTest/setStateTest"
import Main from "../components/Pure/Main"
const About = () => {
    return (
        <>
            <h2>About</h2>
            <Box>
                <Card>
                    <Grid container>
                        <Grid item xs={2}>
                            <Card>
                                <div>{JSON.stringify(module2Fun())}</div>
                                <div>{JSON.stringify(module3Fun())}</div>
                                <FunComponent1 />
                            </Card>
                        </Grid>
                        <Grid item xs={2} sx={{ margin: 5 }}>
                            <CatsComponent />
                        </Grid>
                        <Grid item xs={6} sx={{ margin: 5 }}>
                            <Card >
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Box>

            <Main />
        </>
    )
}
export default About