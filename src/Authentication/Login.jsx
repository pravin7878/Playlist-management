import React, { useEffect, useState } from 'react';
import client from './client';
import { Account } from 'appwrite';
import { useDispatch } from 'react-redux';
import { checkUser, getUser, removeUser } from '../redux/slices/userSlice';
// import { LoginSuccess } from './loginSuccess';
import { Loginform } from '../pages/Loginform';
import { useNavigate } from 'react-router-dom';

const account = new Account(client);




export const handleLogout = async (dispatch) => {
    console.log("Logout in progress...");

    try {
        await account.deleteSession('current');
        // setUser(null);
        dispatch(removeUser())
        console.log("User logged out");
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

const Login = () => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const checkSession = async () => {
    //     try {
    //         const userAccount = await account.get();
    //         setUser(userAccount);
    //         console.log('User authenticated:', userAccount);
    //     } catch (error) {
    //         console.error('No session found:', error);
    //     }
    // };

    const getYouTubeAccessToken = async () => {
        const url = 'https://accounts.google.com/o/oauth2/v2/auth';
        const params = new URLSearchParams({
            client_id: 'YOUR_GOOGLE_CLIENT_ID',
            redirect_uri: 'http://localhost:5173/success', // Make sure this is registered in Google Console
            response_type: 'token',
            scope: 'https://www.googleapis.com/auth/youtube.readonly',
            include_granted_scopes: 'true'
        });

        window.location.href = `${url}?${params.toString()}`;
    };



    const handleLogin = async () => {
        console.log("Login in progress...");
        try {
            await account.createOAuth2Session('google', 'http://localhost:5173/');
            // checkSession();
            dispatch(checkUser())
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    useEffect(() => {
        dispatch(checkUser())
    }, []);

    // useEffect(() => {
    //     if (user) {
    //         dispatch(getUser(user))
    //         navigate("/")
    //     }
    //     else {
    //         dispatch(removeUser(user))
    //     }
    //     console.log(user);
        
    // }, [user])

    return (
        <Loginform handleLogin={handleLogin}/>
    );
};

export default Login


