import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Grid,
} from '@material-ui/core'


const useStyles = makeStyles({
pokedexContainer : {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
}

})

const Pokedex = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static">
            <Toolbar/>
        </AppBar>
        <Grid container spacing={2} className={classes.pokedexContainer} >
            <Grid item xs={2}>
                Item 1
            </Grid>
            <Grid item xs={2}>
                Item 2
            </Grid>

        </Grid>
        </>
    )
}

export default Pokedex;