"use client";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 rounded-lg max-w-screen-lg mx-auto mt-2">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo Section */}
                <div className="text-black text-xl font-semibold font-sans">DesiDesire</div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } absolute top-20 left-0 w-full md:static md:w-auto md:flex md:items-center bg-gray-100 md:bg-transparent rounded-lg shadow-md md:shadow-none`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-black space-y-4 md:space-y-0 p-6 md:p-0 rounded-lg">
                        <li>
                            <a
                                href="/"
                                className="underline hover:text-gray-400 block px-4 py-2"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="underline hover:text-gray-400 block px-4 py-2"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/profile"
                                className="underline hover:text-gray-400 block px-4 py-2"
                            >
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
