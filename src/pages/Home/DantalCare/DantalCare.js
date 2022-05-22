import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';

const DantalCare = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className='md:text-left md:pl-24'>
                    <h1 className="md:text-5xl text-2xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>

                <img src={treatment} alt='chair' className=" md:w-1/3 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default DantalCare;