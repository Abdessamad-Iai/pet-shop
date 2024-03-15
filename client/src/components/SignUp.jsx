// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'sonner';


// eslint-disable-next-line react/prop-types
const SignUp = ({ onClose }) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        Object.keys(formState).forEach(key => {
            if (!formState[key].trim()) {
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                errors[key] = `${formattedKey} is required`;
            }
        });
        if (formState.password !== formState.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const createUser = () => {
        if (!validateForm()) return;

        axios.post("http://localhost:3001/createUser", formState)
            .then(res => {
                toast.success('Sign up successful');
                console.log(res.data)
                onClose();
            })
            .catch(error => {
                console.error('Error signing up:', error);
                toast.error('Error signing up');
            });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-900">Sign Up</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-blue-900">
                        <FontAwesomeIcon icon={faCircleXmark} className="h-6 w-6" />
                    </button>
                </div>
                <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="First Name"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Last Name"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
                <div>
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Address"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Email"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Password"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Confirm Password"
                        required
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <div className="mt-4 flex flex-col items-center">
                    <button className="bg-blue-900 text-white px-4 py-2 w-32 font-black rounded-full hover:bg-blue-600" onClick={createUser}>
                        Sign Up
                    </button>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account? &nbsp;
                        <Link to="/signin" className="text-blue-500 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
