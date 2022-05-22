import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='flex flex-col gap-5 text-left md:flex-row justify-between md:mx-12 mx-5'>
            <InfoCard img={clock} color={'bg-gradient-to-r from-secondary to-primary text-white font-bold'} title={'Opening Hours'} p={'Lorem Ipsum is simply dummy text of the pri'}></InfoCard>

            <InfoCard img={marker} color={'bg-accent'} title={'Visit our location'} p={'Brooklyn, NY 10036, United States'}></InfoCard>

            <InfoCard img={phone} color={'bg-gradient-to-r from-secondary to-primary text-white font-bold'} title={'Contact us now'} p={'+000 123 456789'}></InfoCard>
        </div>
    );
};

export default Info;