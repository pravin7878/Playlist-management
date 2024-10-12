import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/slices/userSlice';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const OauthLogin = () => {
    const dispatch = useDispatch()

    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    // });

    const handleLoginFailure = (error) => {
        console.error('Login failed', error);

    }

    

    const hendelLoginSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        const token = credentialResponse.credential
        const decodedToken = jwtDecode(token)
        dispatch(getUser(decodedToken))
        console.log(decodedToken);
    }


    return (<div className='w-full max-w-md mx-auto bg-white  shadow-lg rounded-lg p-5'>
        <h2 className='w-1/2 m-auto text-center font-bold text-gray-800 mb-2'>Login Now</h2>
        <form className="">
            <div className="">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                />
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>


        </form>

        <div className="flex items-center justify-center mb-2">
            <span className="text-gray-800">or</span>
        </div>

        <div className='flex items-center justify-center'>
        <GoogleLogin
            clientId='743660267745-mccrh5lij23qgr9bf0dsa0am389tpeln.apps.googleusercontent.com'
            onSuccess={hendelLoginSuccess}
            onError={handleLoginFailure}
        />
        </div>
    </div>

    )
}
