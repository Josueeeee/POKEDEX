import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { user } from '../store/slices/UserName.slices'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {

    const [name, setName] = useState("")

    const dispacth = useDispatch();
    const navigate = useNavigate()


    const submit = (e) => {
        e.preventDefault();
        dispacth(user(name))
        navigate("/pokedex")
    }

    return (
        <div className='App'>
            <div className='packeballbg'> <img src="https://raw.githubusercontent.com/Josueeeee/POKEDEX/main/public/pokeball.png" className='rotate'/></div>
            <img src="https://raw.githubusercontent.com/Josueeeee/POKEDEX/main/public/Pok%C3%A9dexlogo.png" className='log'></img>
            <div className='welcome'>
                <h2>Welcome to Pokedex <br />
                 Pokémon Trainer!</h2>
                <img src="https://raw.githubusercontent.com/Josueeeee/POKEDEX/main/public/Pok%C3%A9monTrainer.png" width="200"></img>
            </div>
            <form onSubmit={submit}>
                <div className='container'>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name to start" className='input' />
                <button className='button'><i className="fa-solid fa-right-to-bracket"></i></button>
                </div> 
            </form>
        </div>
    );
};

export default UserForm;