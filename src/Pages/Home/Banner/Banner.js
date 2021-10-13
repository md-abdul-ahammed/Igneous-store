import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-img d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='res-font-size fw-bold'>Best Food Waiting For Your Belly</h1>
                <div className='text-center'>
                    <input type="text" className='w-75 simple-border px-3 py-2 focus-input' />
                    <button className='primary-btn text-white res-px-2 px-4 py-2 ms-n25'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;