import { format } from 'date-fns';
import React from 'react';

const BookingModel = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const slot = event.target.slot.value;
        const number =event.target.number.value;
        console.log(name,slot,number)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking for: {name}</h3>

                    <form onSubmit={handleSubmit}>

                        <input type="text" disabled value={format(date, 'PP')} className="input my-3 input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-info w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Full Name" className="input my-3  input-bordered input-accent w-full max-w-xs" />

                        <input type="email" name="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" name='number' placeholder="Phone" className="input my-3 input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-accent input-bordered input-accent w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;