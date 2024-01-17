import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import { PokemonGrid } from '@/pokemons';


export const metadata = {
 title: 'Favorites',
 description: 'Pokemon list',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 ">Favorite pokemons <small className='text-blue-500'>global state</small></span>
      <PokemonGrid pokemons={ [] } />
    </div>
  )
}