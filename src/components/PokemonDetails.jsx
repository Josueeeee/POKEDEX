import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import color from '../data/color.json'

const PokemonDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setCharacter(res.data))
            .catch(error => navigate("/pokedex"))
    }, [id])
    console.log(character)

    const colorCondision = (
        character.types?.[0].type.name === "fire" ? color.fire :
            character.types?.[0].type.name === "normal" ? color.flying :
                character.types?.[0].type.name === "flying" ? color.flying :
                    character.types?.[0].type.name === "fighting" ? color.fighting :
                        character.types?.[0].type.name === "poison" ? color.poison :
                            character.types?.[0].type.name === "ground" ? color.ground :
                                character.types?.[0].type.name === "rock" ? color.rock :
                                    character.types?.[0].type.name === "bug" ? color.bug :
                                        character.types?.[0].type.name === "ghost" ? color.ghost :
                                            character.types?.[0].type.name === "steel" ? color.steel :
                                                character.types?.[0].type.name === "water" ? color.water :
                                                    character.types?.[0].type.name === "electric" ? color.electric :
                                                        character.types?.[0].type.name === "psychic" ? color.psychic :
                                                            character.types?.[0].type.name === "ice" ? color.ice :
                                                                character.types?.[0].type.name === "dragon" ? color.dragon :
                                                                    character.types?.[0].type.name === "dark" ? color.dark :
                                                                        character.types?.[0].type.name === "fairy" ? color.fairy :
                                                                            character.types?.[0].type.name === "unknown" ? color.unknown :
                                                                                character.types?.[0].type.name === "shadow" ? color.shadow :
                                                                                    character.types?.[0].type.name === "grass" ? color.grass :
                                                                                        "black"
    )



    return (
        <div className='character' style={{ background: colorCondision }}>
            <div className='packeballbg'> <img src="./public/pokeball.png" className='rotate' /></div>
            <div className='grid-item'>
                <button className='close ' onClick={() => navigate("/pokedex")}><i className="fa-solid fa-circle-arrow-left"></i></button>
                <div className='bgwhite containercharaceter'>
                    <p>height
                        <br /><b>{character.height} </b></p>
                    <p>weight
                        <br /><b>{character.weight} </b></p>
                    <div>
                        <p>type
                            <br /> {character.types?.map(item => (
                                <b key={item.type.name}>{item.type.name} </b>
                            )
                            )}</p>
                        <p>abilities
                            <br /> {character.abilities?.map(item => (
                                <b key={item.ability.name}>{item.ability.name} </b>
                            )
                            )}</p>
                    </div>
                </div>
            </div>
            <div className='grid-item'>
                <h3 className='title'>{character.name}</h3>
                <img src={character.sprites?.other.home.front_default} alt="" />
            </div>
            <div className='grid-item '>
                <div className='bgwhite'>
                    <b>moves</b>
                    <p className='containermoves'>
                        <br /> {character.moves?.map(item => (
                            <p className='moves' key={item.move.name} >{item.move.name} </p>
                        )
                        )}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;