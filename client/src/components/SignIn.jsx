import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const SignIn = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-blue-900">Sign In</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-blue-900"
                        >
                            <FontAwesomeIcon icon={faCircleXmark} className="h-6 w-6" />
                        </button>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Email"
                            required
                        />
                        </div>
                        <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <button className="bg-blue-900 text-white px-4 py-2 w-32 font-black rounded-full hover:bg-blue-600">
                            Sign In
                        </button>
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account yet? &nbsp;
                            <Link to="#" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
        };

export default SignIn