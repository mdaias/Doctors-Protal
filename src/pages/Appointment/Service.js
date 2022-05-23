import React from 'react';

const Service = ({service}) => {
    const {slots, name} = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl font-bold">
            <div className="card-body">
                <h2 className="text-secondary md:text-2xl text-xl">{name}</h2>
                <p>{slots.length===0? <span className='text-red-600'>Slots is not available now</span> : slots[0]}</p>
                <p>{slots.length} {slots.length === 1 ? 'Space' : 'Spaces'} Available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length===0} className="btn btn-secondary mt-5 text-white">BOOK Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;