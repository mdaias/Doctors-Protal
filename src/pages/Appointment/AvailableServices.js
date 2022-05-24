import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableServices = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    }, [])
    return (
        <div className='mt-12 md:my-20'>
            <h1 className='text-secondary mb-6 md:mb-12 font-bold text-2xl'>Available Service On {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid:cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModel
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                >
                </BookingModel>
            }
        </div>
    );
};

export default AvailableServices;