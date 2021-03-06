import React from 'react';

const InfoCard = ({ img, color ,title, p }) => {
    return (
        <div className={`card lg:card-side bg-base-100 w-full p-3 md:p-3 shadow-xl text-white ${color}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body md:mt-5">
                <h2 className="card-title md:text-3xl">&{title}</h2>
                <p className='md:text-xl'>&{p}</p>
            </div>
        </div>
    );
};

export default InfoCard;