import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";

function App() {

    return (
        <Grid templateAreas={{
            base: '"nav" "main"',
            lg: '"nav nav" "aside main"'
        }}>
            <GridItem area={"nav"} bg={"coral"}>
                nav
            </GridItem>
            <GridItem area={"aside"} bg={"gold"} display={{base: "none", lg: "Block"}} >
                aside
            </GridItem>
            <GridItem area={"main"} bg={"blue.50"}>
                main
            </GridItem>


        </Grid>
    )
}

export default App
