"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type NavBarLinksProps = {
  children: React.ReactNode;
  dropdown?: boolean;
};

const NavBarLinks = ({ children, dropdown }: NavBarLinksProps) => {
  return (
    <div className="flex flex-row gap-2">
      <Link
        href=""
        className={`lg:text-lg text-xl text-white font-MaisonNeueDemi cursor-pointer ${!dropdown}`}
      >
        {children}
      </Link>
      {dropdown && (
        <Image
          src="/assets/chevron-down.svg"
          alt="chevron-down"
          width={16}
          height={16}
          className="pointer-mouse"
        />
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex flex-row bg-background p-10 justify-between">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <Image src="/assets/close.svg" alt="close" width={32} height={32} />
        ) : (
          <Image
            src="/assets/hamburger.svg"
            alt="hamburger"
            width={32}
            height={32}
          />
        )}
      </button>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-24 left-0 w-full bg-background md:flex md:static md:w-auto `}
      >
        <div className="flex flex-col md:flex-row gap-5 p-4 md:p-0 md:w-full">
          <NavBarLinks>Beranda</NavBarLinks>
          <NavBarLinks dropdown>Gabung jadi Mitra</NavBarLinks>
          <NavBarLinks>Gocorp</NavBarLinks>
          <NavBarLinks>Karir</NavBarLinks>
          <NavBarLinks dropdown>Perusahaan</NavBarLinks>
          <NavBarLinks>Produk</NavBarLinks>
          <NavBarLinks>Blog</NavBarLinks>
          <NavBarLinks>Bantuan</NavBarLinks>
          <NavBarLinks dropdown>ID</NavBarLinks>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
