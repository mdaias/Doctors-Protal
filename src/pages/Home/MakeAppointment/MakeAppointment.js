import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import bgAppointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div className='my-10 md:my-52 mx-5 md:mx-12 flex md:flex-row flex-col justify-center items-center p-2' style={{background:`url(${bgAppointment})`}}>
            <div className="thumbnail flex-1 hidden md:block">
                <img className='md:-mt-52' src={doctor} alt="" />
            </div>
            <div className="details text-white font-bold flex-1 md:p-5 md:text-left">
                <h3 className='text-xl text-primary md:text-2xl my-2 md:my-5'>Appointment</h3>
                <h1 className='text-2xl md:text-5xl'>Make an appointment Today</h1>
                <p className='text-sm md:text:lg my-2 mb-5 md:my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
    );
};

export default MakeAppointment;