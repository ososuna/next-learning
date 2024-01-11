import { Metadata } from 'next';
import { Pokemon } from '@/pokemons';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pokemon ${params.id} description`,
  }
}

const getPokemon = async(id: string): Promise<Pokemon> => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
    // next: {
    //   revalidate: 60 * 60 * 24,
    // }
  }).then(res => res.json());
}

export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon { pokemon.name }</h1>
    </div>
  );
}