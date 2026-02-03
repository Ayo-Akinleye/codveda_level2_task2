import BackgroundImg from '../assets/bg-image-1.jpg'
import sunImg from '../assets/sun-image.png'
import SearchInput from './SearchInput'
import DisplayDate from './DisplayDate';
import { MapPin, Wind, Droplets } from 'lucide-react';

const WeatherPage = () => {
    return (
        <section className='h-screen'>
            <div
                className='h-full flex flex-col p-5 items-center bg-gray-900 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            >
                <SearchInput />
                .
                {/* container div */}
                <div className='flex flex-col mt-6 h-[90%] w-[90%] md:w-[45%] bg-white/30 backdrop-blur-md p-8 rounded-lg text-gray-600 gap-6'>

                    {/* first div: Location & date */}
                    <div>
                        <p className='font-semibold text-xl flex items-center gap-1 '>
                            <MapPin />
                            LAGOS, NIGERIA
                        </p>
                        <DisplayDate />
                    </div>

                    {/* Second div: Image and weather details */}
                    <div className='grid w-full justify-center items-center md:grid-cols-2 md:justify-between gap-6'>

                        <img src={sunImg} alt="Illustration of the sun" className='h-40 w-40' />

                        {/* Weather details */}
                        <div className='flex flex-col items-center gap-2 text-white'>
                            <h2 className='font-bold text-4xl'>0°C</h2>
                            <p className='text-2xl font-semibold'>Sunny</p>
                        </div>

                    </div>

                    {/* 3rd Div: Extra weather information */}
                    <div className='col-span-1 md:col-span-2 flex w-full items-center justify-between mt-10 text-white'>
                        <div>
                            <Droplets />
                            <p>20%</p>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <Wind />
                            <p>2 km/h</p>
                            <p>Wind</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WeatherPage
