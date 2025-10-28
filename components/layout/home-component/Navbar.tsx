"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

import { LiaTimesSolid } from "react-icons/lia";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full bg-background-light/80 backdrop-blur-sm px-6 py-4 shadow-md">
        <div className="flex items-center justify-between ">
          <div
            className="md:hidden max-md:block transition-all duration-300 ease-in-out"
            onClick={handleMenu}
          >
            {menuOpen ? (
              <LiaTimesSolid size={35} />
            ) : (
              <RxHamburgerMenu size={35} />
            )}
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-blue-500">E-learn</h1>
          </div>
          <nav className="flex items-center gap-3">
            <div className="flex max-md:hidden">
              <ul className="flex items-center gap-3">
                <li className="cursor-pointer">Explore courses</li>
                <li className="cursor-pointer">Corporate plans</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button
                className="px-3 py-2 bg-blue-100 text-blue-500 font-bold cursor-pointer max-md:hidden"
                variant="secondary"
              >
                Login
              </Button>
              <Button className="px-3 py-2 font-bold text-white bg-blue-500 rounded-[10px] cursor-pointer border-none">
                <Link href="auth">Sign up</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40 md:hidden">
          <div className="w-64 min-h-screen bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end">
              <button
                onClick={handleMenu}
                className="text-gray-800 hover:text-gray-600"
                aria-label="Close menu"
              >
                <LiaTimesSolid size={30} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/explore"
                className="text-gray-800 hover:text-blue-500 transition-colors"
                onClick={handleMenu}
              >
                Explore Courses
              </Link>
              <Link
                href="/corporate"
                className="text-gray-800 hover:text-blue-500 transition-colors"
                onClick={handleMenu}
              >
                Corporate Plans
              </Link>
            </nav>
            <div className="mt-6 space-y-4">
              <Button
                className="w-full px-4 py-2 bg-blue-100 text-blue-500 font-semibold hover:bg-blue-200 transition-colors"
                variant="secondary"
              >
                <Link href="/login" onClick={handleMenu}>
                  Login
                </Link>
              </Button>
              <Button className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                <Link href="/signup" onClick={handleMenu}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
