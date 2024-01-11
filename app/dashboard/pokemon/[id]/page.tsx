import { Pokemon } from '@/pokemons';

interface Props {
  params: { id: string };
}

const getPokemon = async(id: string): Promise<Pokemon> => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  }).then(res => res.json());
}

export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon { params.id }</h1>
    </div>
  );
}