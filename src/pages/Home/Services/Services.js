import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {_id:1, title:'Services We Provide', description:'', img:
        fluoride},
        {_id:2, title:'Cavity Filling', description:'', img:cavity},
        {_id:3, title:'Teeth Whitening', description:'', img:whitening}
    ]

    return (
        <div className='my-12 md:mt-20'>
            <div className=' my-12 md:my-2'>
            <h1 className='text-center font-bold text-2xl md:text-2xl text-primary md:mb-5'>OUR SERVICES</h1>
            <h3 className='text-cente font-bold text-3xl md:text-5xl'>Services We Provide</h3>
            </div>

            <div className='flex md:flex-row flex-col justify-center gap-5 md:gap-10'>
                {
                    services.map(service=><Service 
                    key={service.id}
                    service={service
                    }></Service>)
                }
            </div>
        </div>
    );
};

export default Services;