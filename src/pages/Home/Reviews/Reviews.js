import React from 'react';

const Reviews = ({ review }) => {
    return (

        <div className='card flex flex-row md:w-96 bg-base-100 shadow-xl '>
            <div className="card-body">
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, temporibus. Excepturi deleniti, molestiae quasi blanditiis fugiat repudiandae optio cumque voluptate!</p>

                <div className='flex justify-between items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1>{review.name}</h1>
                        <h3>{review.country}</h3>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Reviews;