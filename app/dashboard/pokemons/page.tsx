import { PokemonsResponse, SimplePokemon } from '@/app/pokemons';
import { PokemonGrid } from '@/app/pokemons';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then(res => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 ">Pokemon list <small>static</small></span>
      <PokemonGrid pokemons={ pokemons } />
    </div>
  )
}