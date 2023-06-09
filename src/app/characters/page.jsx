const { default: axios } = require("axios");
const { default: Link } = require("next/link");

const fetchData = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(res.data.results);
    return res.data.results;
  } catch (e) {
    console.log("Error fetching data", e.message);
  }
};

const Characters = async () => {
  const characters = await fetchData();

  //   console.log(characters);

  return (
    <main className="grid grid-cols-3 md:grid-cols-5 gap-8 min-h-screen p-12">
      {characters.map((character, index) => (
        <Link
          key={index}
          href={`characters/${character.id}`}
          className="transition ease-in-out hover:scale-105 bg-slate-50 rounded shadow flex flex-col gap-4 p-4 text-center items-center"
        >
          <img
            src={character.image}
            alt={`${character.name} image`}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">{character.name}</h1>
        </Link>
      ))}
    </main>
  );
};

export default Characters;
