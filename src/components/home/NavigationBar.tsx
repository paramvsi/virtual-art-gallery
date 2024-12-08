import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-br text-[#958FA3] shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="font-serif text-xl">ArtInvision</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {[
              "home",
              "about",
              "gallery",
              "exhibitions",
              "events",
              "blog",
              "contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  className="block p-2 hover:text-[#958FA3] transition-colors"
                  href={`/${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
