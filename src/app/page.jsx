import Link from "next/link";

export default async function Home() {
  const cards = [
    { title: "Characters", link: "/characters" },
    { title: "Locations", link: "/locations" },
    { title: "Episodes", link: "/episodes" },
  ];
  return (
    <main className="flex gap-16 justify-center items-center min-h-screen">
      {cards.map((card, index) => (
        <Link
          key={index}
          href={card.link}
        >
          <div className="transition ease-in-out hover:scale-110 bg-slate-50 card w-72 h-96 flex items-center justify-center rounded">
            <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
          </div>
        </Link>
      ))}
    </main>
  );
}
