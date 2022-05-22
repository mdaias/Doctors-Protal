import React from 'react';
import Banner from '../Banner/Banner';
import DantalCare from '../DantalCare/DantalCare';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DantalCare></DantalCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;