import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto my-2 px-6 flex flex-wrap justify-center items-center gap-5">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/subscribe">Subscribe</Link>
      </div>
      <p className="mt-4 md:mt-0">© 2023 ArtInvision. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
