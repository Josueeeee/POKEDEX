import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import color from '../data/color.json'

const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonCard, setPokemonCard] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemonCard(res.data))
    }, [])

    
    

    const colorCondision = ( 
               pokemonCard.types?.[0].type.name === "fire" ? color.fire : 
               pokemonCard.types?.[0].type.name === "normal" ? color.flying : 
               pokemonCard.types?.[0].type.name === "flying" ? color.flying : 
               pokemonCard.types?.[0].type.name === "fighting" ? color.fighting :
               pokemonCard.types?.[0].type.name === "poison" ? color.poison :
               pokemonCard.types?.[0].type.name === "ground" ? color.ground :
               pokemonCard.types?.[0].type.name === "rock" ? color.rock :
               pokemonCard.types?.[0].type.name === "bug" ? color.bug :
               pokemonCard.types?.[0].type.name === "ghost" ? color.ghost :
               pokemonCard.types?.[0].type.name === "steel" ? color.steel :
               pokemonCard.types?.[0].type.name === "water" ? color.water :
               pokemonCard.types?.[0].type.name === "electric" ? color.electric :
               pokemonCard.types?.[0].type.name === "psychic" ? color.psychic :
               pokemonCard.types?.[0].type.name === "ice" ? color.ice :
               pokemonCard.types?.[0].type.name === "dragon" ? color.dragon :
               pokemonCard.types?.[0].type.name === "dark" ? color.dark :
               pokemonCard.types?.[0].type.name === "fairy" ? color.fairy :
               pokemonCard.types?.[0].type.name === "unknown" ? color.unknown :
               pokemonCard.types?.[0].type.name === "shadow" ? color.shadow :
               pokemonCard.types?.[0].type.name === "grass" ? color.grass :
               "black" 
    )


    console.log(colorCondision)    
        
    return (
        <div onClick={() => navigate(`/pokedex/${pokemonCard.id}`)} className="card" style={{
             background: colorCondision
             }}>
        <div className='background'></div>
            <img src={pokemonCard.sprites?.other.home.front_default} width="200px"  className='pokemonimg'/>
            <div className='bg'>
                    <div>
                        <div>
                            <h3>{pokemonCard.name}</h3>
                            <p>{pokemonCard.types?.[0].type.name} {pokemonCard.types?.[1]?.type.name ? "/" : " "} {pokemonCard.types?.[1]?.type.name}</p>
                        </div>
                    </div>
                    <div className='info'>
                        <div>
                            <p>hp</p>
                            <p  style={{color: colorCondision}}><b >{pokemonCard.stats?.[0].base_stat}</b></p>
                            <p>attack</p>
                            <p style={{color: colorCondision}}> <b  >{pokemonCard.stats?.[1].base_stat} </b></p>
                        </div>
                        <div>
                            <p>defense</p>
                            <p style={{color: colorCondision}}> <b  >{pokemonCard.stats?.[2].base_stat}</b> </p>
                            <p>Speed</p>
                            <p style={{color: colorCondision}}> <b  >{pokemonCard.stats?.[5].base_stat}</b></p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PokemonCard;