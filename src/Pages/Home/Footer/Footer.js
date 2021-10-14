import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-f.png'

const Footer = () => {
    return (
        <div className='bg-dark pt-5'>
            <div className='row container mx-auto '>
                <div className='col-md-3'>
                    <img src={logo} className="mt-2 logo-fluid" alt="" />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <Link className='text-white text-decoration-none d-block my-2'>Privacy Policy</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Term Of Use</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Pricing</Link>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <Link className='text-white text-decoration-none d-block my-2'>About online food</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Read Our blog</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Sign up to deliver</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Add your restaurant</Link>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <Link className='text-white text-decoration-none d-block my-2'>Get help</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Read FAQs</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>View all cities</Link>
                    <Link className='text-white text-decoration-none d-block my-2'>Restaurant near me</Link>
                </div>
            </div>
            <p className='text-center text-white m-0 pt-4 pb-2'>© 2020-2021 <span className='default-text-color'>Abdul Ahammed</span> All Rights Reserved</p>
        </div>
    );
};

export default Footer;