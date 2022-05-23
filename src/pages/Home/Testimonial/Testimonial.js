import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from '../Reviews/Reviews';


const Testimonial = () => {
    const reviews = [

        { _id: 1, name: 'Shofiul Akbar', img: people1, country: 'Bangladesh' },
        { _id: 2, name: 'Junaid Ahmad', img: people2, country: 'Bangladesh' },
        { _id: 3, name: 'Misbhaul haque', img: people3, country: 'Bangladesh' },

    ]

    return (
        <div className='flex flex-col'>
            <div>
                <div className='flex  justify-between items-center my-12 md:my-24 md:mx-12 mx-5'>
                    <article className='text-left p-2'>
                        <h3 className=' text-cyan-500 mt-3 text-lg'>Testimonial</h3>
                        <h1 className='md:text-3xl text-2xl mr-4 mt-3 md:mt-5'>What Our Patients Says</h1>
                    </article>
                    <article>
                        <img className='md:w-48 w-24' src={quote} alt="" />
                    </article>
                </div>
            </div>

            <div className='mb-12 '>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {
                        reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;