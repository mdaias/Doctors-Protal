import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat"  style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' className=" md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:text-left md:pr-24'>
                    <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;