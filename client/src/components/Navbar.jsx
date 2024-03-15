// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [showSignUp, setShowSignUp] = useState(false);
    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    const [showSignIn, setShowSignIn] = useState(false);
    const toggleSignIn = () => {
        setShowSignIn(!showSignIn)
    }

    return (
        <nav className={`bg-amber-100 p-4 relative shadow-md ${dropdownOpen ? '' : 'overflow-y-hidden'}`}>
            <div className="container mx-auto flex items-center justify-between" id="myNavbar">
                <div className="flex items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-16 w-32 mr-2"
                />
                <span className="text-blue-900 font-serif italic font-black text-2xl logo font-lobster">Pet Abra</span>
                <FontAwesomeIcon icon={faPaw} className="logo-icon text-blue-900 transform rotate-45 pl-1 mt-[-20px]" />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-blue-900  font-black hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px] ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/store" className="text-blue-900  font-black hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-blue-900  font-black hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-blue-900  font-black hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-baseline justify-between w-full py-2 px-3 text-blue-900  font-black  rounded md:border-0 md:p-0 md:w-auto dropdown-menu transition-all duration-300 ease-in-out hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]"
                        >
                            <span>
                            What we do
                            </span>
                            <svg
                            className="w-2.5 h-2.5 ms-2.5 flex justify-center items-center"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                            </svg>
                        </button>
                        <div
                            className={`${
                                dropdownOpen
                                ? "absolute z-10 font-normal bg-amber-100 rounded-lg shadow w-44 drop"
                                : "hidden"
                            }`}
                        >
                            <ul
                            className="py-2 text-sm text-gray-700 z-40"
                            aria-labelledby="dropdownLargeButton"
                            >
                                <li className="dropdown-item text-blue-900 font-bold hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                                    <Link
                                    to="/adoption"
                                    className="block px-4 py-2  font-black hover:underline"
                                    >
                                    Adoption
                                    </Link>
                                </li>
                                <li className="dropdown-item text-blue-900 font-bold hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                                    <Link
                                    to="/donation"
                                    className="block px-4 py-2  font-black "
                                    >
                                    Donation
                                    </Link>
                                </li>
                                <li className="dropdown-item text-blue-900 font-bold hover:underline hover:decoration-[#1e3a8a] hover:decoration-solid hover:decoration-[2px]">
                                    <Link
                                    to="/q&a"
                                    className="block px-4 py-2  font-black "
                                    >
                                    Q & A
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="flex space-x-4">
                    <button onClick={toggleSignIn} className="text-blue-900 border-2 border-blue-900 px-4 py-2 w-32 font-black rounded-full">
                        Login
                    </button>
                    <button onClick={toggleSignUp} className="bg-blue-900 text-white px-4 py-2 w-32 font-black rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>
            {showSignUp && <SignUp onClose={toggleSignUp} />}
            {showSignIn && <SignIn onClose={toggleSignIn} />}
        </nav>
    );
    };

export default Navbar;