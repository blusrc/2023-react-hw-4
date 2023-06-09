import axios from "axios";

async function fetchChar(id) {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("error loading data", e.message);
  }
}

export default async function Character({ params }) {
  const { id } = params;
  const char = await fetchChar(id);
  return (
    <main className="min-h-screen flex justify-center items-center text-black p-12">
      <div className="container bg-slate-50 rounded shadow transition hover:slace-105 flex flex-col gap-4 p-4 items-center">
        <img
          src={char.image}
          alt={char.name}
          className="rounded-full w-32 h-32"
        />
        <h1 className="text-2xl font-bold">{char.name}</h1>
      </div>
    </main>
  );
}
