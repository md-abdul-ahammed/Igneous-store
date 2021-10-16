import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Login.css';
import { FaFacebook } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingFacebook } = useAuth();
    return (
        <div className='d-flex justify-content-around res-flex-column container align-items-center'>
            <form className='mt-5 mb-3'>
                <img className='logo2-fluid mb-5' src={logo} alt="" />
                <input className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Email' type="email" />
                <input className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Password' type="password" />
                <button className='primary-input py-3 px-3 d-block mb-3 primary-btn text-white'>Log In</button>
                <p>Are you New Member? Please, <Link className='fw-bold default-text-color' to='/register'>Create an account</Link></p>
            </form>
            <div>
                <h1 className='text-center'>Or, Login With</h1>
                <button onClick={signInUsingFacebook} className='primary-input py-2 px-1 d-block mb-3 rounded-pill bg-primary border-none text-white'><span className='fs-4'><FaFacebook /></span> Login With Facebook</button>
                <button onClick={signInUsingGoogle} className='primary-input py-2 px-1 rounded-pill d-block mb-3 bg-danger border-none text-white'><span className='fs-4'><BsGoogle /></span> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;