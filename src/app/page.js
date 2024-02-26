import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href="/pages/pokedex">Ir para pokedex</Link>
      <div className="w-2/4 h-64 border border-black">
        <h1 className="uppercase text-center mt-2">Sobre</h1>
        <div className="flex flex-row gap-4">
          <div className="w-1/2">
            <h4>
              A ideia deste projeto consiste em um "case opening" de pokemon, na
              home o usuário pode obter um pokemon aleatório que irá para sua
              coleção na pokedéx.
            </h4>
          </div>
          <div className="w-1/2">aqui vai a foto de algum pokemon</div>
        </div>
      </div>

      <div>aqui vai a roleta</div>
    </div>
  );
};

export default Home;
