import Link from 'next/link';
import CardPokemon from '../../components/CardPokemon';

const fetchPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  if (!response.ok) {
    console.log('deu erro!');
  }
  const dados = await response.json();

  const infoPokemons = await Promise.all(
    dados.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    })
  );

  const pokemonsCominfo = dados.results.map((pokemon, index) => ({
    name: pokemon.name,
    image: infoPokemons[index].sprites.front_default,
  }));

  return pokemonsCominfo;
};

const Pokedex = async () => {
  const pokemons = await fetchPokemons();

  return (
    <div>
      <div>oi to na pokedex</div>
      <Link href="/">Voltar para home</Link>
      <h1 className="uppercase text-white">Lista dos pokemons:</h1>
      <CardPokemon pokemons={pokemons} />
    </div>
  );
};

export default Pokedex;
