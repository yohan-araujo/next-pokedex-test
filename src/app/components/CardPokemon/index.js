const CardPokemon = ({ pokemons }) => {
  return (
    <div className="w-screen flex flex-wrap gap-5 justify-center">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex flex-col justify-center border border-black w-48 h-"
        >
          <h1 className="uppercase text-center mt-2">{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          {console.log(pokemon)}
        </div>
      ))}
    </div>
  );
};

export default CardPokemon;
