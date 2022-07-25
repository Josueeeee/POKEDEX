import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import UserForm from './components/UserForm'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<UserForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
