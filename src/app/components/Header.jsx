export default function Header() {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a
          href="/"
          className="text-xl font-bold text-white"
        >
          Rick & Morty App
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="hover:text-gray-300 text-gray-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-gray-300 text-gray-100"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
