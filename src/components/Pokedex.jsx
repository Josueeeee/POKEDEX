import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
const Pokedex = () => {

    const userName = useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [searchCharacter, setSearchCharacter] = useState("")


    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500")
            .then(res => setPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))
    }, [])

    const search = () => {
        navigate(`/pokedex/${searchCharacter.toLocaleLowerCase()}`)
    }

    const filtertypes = (e) => {
        if (e.target.value !== "all") {
            axios.get(e.target.value)
                .then(res => setPokemons(res.data.pokemon));
        } else {
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500")
                .then(res => setPokemons(res.data.results));
        }

    }

    const [page, setPage] = useState(1);
    const itemsNumber = 20;
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons?.length / itemsNumber);
    const pagesNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
    }


    return (
        <div>
            <div className='packeballbg'> <img src="./src/img/pokeball.png" className='rotate' /></div>
            <div className='pokedex'>
    
                <img src="./src/img/Pokédexlogo.png" width="300px" onClick={()=>navigate("/pokedex/")} ></img>
                <div className='wl'><p>Hello  <b>{userName} </b> </p>
                   </div>
                <div>
                    <form onSubmit={search}>
                        <input type="text" className='search' value={searchCharacter} onChange={e => setSearchCharacter(e.target.value)} />
                        <button className='btsearch'>search</button>
                    </form>
                    <div style={{ marginBottom: "-40px" }} className="divselect">
                        <select className="select" onChange={filtertypes}>
                            <option value="all">All pokemons</option>
                            {
                                types.map(type => (
                                    <option value={type.url} key={type.url}>{type.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='bgblack'></div>
                <div className='circleBlack'></div>
                <div className='circleWithe'></div>
            </div>
            <button className='close' onClick={()=>navigate("/")}><i className="fa-solid fa-circle-arrow-left"></i></button>             
            <ul className="pokemonCards">
                {pokemonPaginated.map(pokemon =>
                (
                    <div key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                        <PokemonCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                    </div>
                )
                )}
            </ul>
            <div className='numberpages'>
                <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
                    previous page
                </button>
                {page} / {totalPages}
                <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
                    next page
                </button>
                <div>
                    {pagesNumbers.map((page) => (
                        <button onClick={() => setPage(page)} key={page}>
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Pokedex;