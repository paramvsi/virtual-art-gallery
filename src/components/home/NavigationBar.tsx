// Assuming you're already in a .tsx file
import Link from "next/link";
import type { FC } from "react"; // FC is Function Component type

const NavigationBar: FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="font-serif text-xl text-yellow-500">ArtInvision</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/home"
                className="hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-yellow-500 transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/exhibitions"
                className="hover:text-yellow-500 transition-colors"
              >
                Exhibitions
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-yellow-500 transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-500 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
