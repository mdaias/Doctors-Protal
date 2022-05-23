import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';

const Appointment = () => {
    const [date, setDate] = useState (new Date())

    return (
        <div className='md:mx-16'>
            <AppointmentBanner data={date} setDate={setDate}></AppointmentBanner>
            <AvailableServices date={date}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;