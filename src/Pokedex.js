import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import mockdata from './mockdata';
import {
    AppBar,
    Toolbar,
    Grid,
    Card,
    CircularProgress,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core'


const useStyles = makeStyles({
pokedexContainer : {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
},
cardMedia:{
    margin: "auto"
}

})



const Pokedex = (props) => {
    const classes = useStyles();
    const [pokemonData,setPokemonData]= useState(mockdata);
    const { history } = props;

    const toFirstCharUppercase = name =>
    name.charAt(0).toUpperCase() + name.slice(1);
   
    const getPokemonCard = (pokemonId) => {
        const {id,name} = pokemonData[`${pokemonId}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id
          }.png`;
        console.log(pokemonData[`${pokemonId}`])
        return (
            <Grid item xs={4} key={pokemonId}>
                <Card onClick= {()=>history.push(`/${pokemonId}`)}>
                    <CardMedia
                    classes={classes.cardMedia}
                    image={sprite}
                    style={{width:"130px",height:"130px"}}
                    />
                    <CardContent> 
                        <Typography> {`${id}.${toFirstCharUppercase(name)}`} </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
        return (
        <>
        <AppBar position="static">
            <Toolbar/>
        </AppBar>
        {pokemonData ?   <Grid container spacing={2} className={classes.pokedexContainer} >
            {Object.keys(pokemonData).map((pokemonId)=>
            getPokemonCard(pokemonId)
            )}
        </Grid>:
        <CircularProgress/>
        }
      
        </>
    )
}

export default Pokedex;