import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({date, setDate}) => {

    return (
        <div class="hero min-h-screen no-repeat " style={{ backgroundImage: `url(${bg})` }}>

            <div class="hero-content flex-col gap-5 md:gap-32 lg:flex-row-reverse">

                <img src={chair} alt='chair pic' 
                className="md:w-1/2 w-full rounded-lg shadow-2xl" />
                
                <div className='rounded-lg shadow-2xl p-2 md:p-5'>
                   <DayPicker
                   mode="single"
                   selected={date}
                   onSelect={setDate}
                   /> 
                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;