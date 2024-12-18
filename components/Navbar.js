"use client";
import { useState } from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isSignedIn, user } = useUser();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 rounded-lg w-full px-4 mx-auto mt-2 max-w-screen-xl">
            <div className="flex justify-between items-center h-16">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 p-2">
                        <img
                            src="/sari-svg.svg" // Path to your SVG in the public folder
                            alt="DesiDesire Logo"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="italic text-black text-xl font-semibold font-sans">
                        DesiDesire
                    </span>
                </div>

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

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6 items-center text-black">
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
                        {isSignedIn ? (
                            <li className="flex items-center space-x-4">
                                <a href="/account" className="relative">
                                    {user?.profileImageUrl ? (
                                        <img
                                            src={user.profileImageUrl}
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
                                        />
                                    ) : (
                                        <div
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold text-sm border border-gray-300 shadow-sm"
                                            title={user?.fullName || "User"}
                                        >
                                            {user?.fullName
                                                ?.split(" ")
                                                .map((part) => part.charAt(0).toUpperCase())
                                                .join("")
                                                .slice(0, 2)}
                                        </div>
                                    )}
                                </a>
                                <SignOutButton>
                                    <a className="underline text-red-500 hover:text-red-700 block px-4 py-2 cursor-pointer">
                                        Sign Out
                                    </a>
                                </SignOutButton>
                            </li>
                        ) : (
                            <li>
                                <SignInButton>
                                    <a
                                        className="underline hover:text-gray-400 block px-4 py-2 cursor-pointer text-green-500"
                                    >
                                        Sign In
                                    </a>
                                </SignInButton>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden absolute top-full left-0 w-full bg-gray-100 bg-opacity-90 shadow-lg p-6 space-y-4 flex flex-col items-center justify-center mt-2 rounded-lg`}
            >
                <ul className="space-y-4 text-black flex flex-col items-center justify-center">
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
                    {isSignedIn ? (
                        <li className="flex flex-col items-center space-y-2 text-center">
                            <a href="/account" className="relative">
                                {user?.profileImageUrl ? (
                                    <img
                                        src={user.profileImageUrl}
                                        alt="User Avatar"
                                        className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
                                    />
                                ) : (
                                    <div
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold text-sm border border-gray-300 shadow-sm"
                                        title={user?.fullName || "User"}
                                    >
                                        {user?.fullName
                                            ?.split(" ")
                                            .map((part) => part.charAt(0).toUpperCase())
                                            .join("")
                                            .slice(0, 2)}
                                    </div>
                                )}
                            </a>
                            <SignOutButton>
                                <a className="underline text-red-500 hover:text-red-700 block px-4 py-2 cursor-pointer">
                                    Sign Out
                                </a>
                            </SignOutButton>
                        </li>
                    ) : (
                        <li>
                            <SignInButton>
                                <a
                                    className="underline hover:text-gray-400 block px-4 py-2 cursor-pointer text-green-500"
                                >
                                    Sign In
                                </a>
                            </SignInButton>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
