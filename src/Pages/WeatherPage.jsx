import BackgroundImg from '../assets/bg-image-1.jpg'
import SearchInput from '../Components/SearchInput'
import DisplayDate from '../Components/DisplayDate';
import { MapPin, Wind, Droplets } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WeatherImage from '../Components/WeatherImage';

const WeatherPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    const fetchWeather = useCallback((cityName) => {
        setError(null);
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=700d25e4ad4d6a082e14c30f3ed48ce9&units=metric`;
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data)
                setData(res.data)
                setError(null);
            })
            .catch(err => {
                console.log(err)
                if (err.response && err.response.status === 404) {
                    setError("City not found. Please try again.")
                } else {
                    setError('Something went wrong. Please try again.');
                }
                setData(null);
            });
    }, [])

    useEffect(() => {
        fetchWeather('London')
    }, [fetchWeather])
    // London weather data loads automatically before user search. useEffect fetchs the weather data when the component mounts(first loads)

    return (
        <section className='h-screen'>
            <div
                className='h-full flex flex-col p-5 items-center bg-gray-900 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            >
                <SearchInput getWeather={fetchWeather} />
                {error && (
                    <div className='mt-4 bg-red-500/80 text-white px-4 py-2 rounded-lg'>{error}</div>
                )}


                {/* container div */}
                <div className='flex flex-col mt-10 h-[80%] w-[90%] md:w-[40%] bg-white/30 backdrop-blur-md p-8 rounded-lg text-gray-600 gap-6'>

                    {/* first div: Location & date */}
                    <div>
                        <p className='font-semibold text-xl flex items-center gap-1 '>
                            <MapPin />
                            {data ? data.name : '...'}
                        </p>
                        <DisplayDate />
                    </div>

                    {/* Second div: Image and weather details */}
                    <div className='grid w-full justify-center items-center md:grid-cols-2 md:justify-between gap-6'>

                        <WeatherImage condition={data?.weather[0].main} />

                        {/* Weather details */}
                        <div className='flex flex-col items-center gap-2 text-white'>
                            <h2 className='font-bold text-4xl'>
                                {data ? `${Math.round(data.main.temp)}°C` : (
                                    <div className='h-10 w-24 bg-white/20 animate-pulse rounded'></div>
                                )}

                            </h2>
                            <p className='text-xl font-semibold'>
                                {data ? data.weather[0].description : 'Loading...'}
                            </p>
                        </div>

                    </div>

                    {/* 3rd Div: Extra weather information */}
                    <div className='col-span-1 md:col-span-2 flex w-full px-4  items-center justify-between mt-10 text-white'>
                        <div>
                            <Droplets />
                            <p>{data ? `${data.main.humidity}%` : '--%'}</p>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <Wind />
                            <p>
                                {data ? `${Math.round(data.wind.speed)}km/h` : '-- km/h'}

                            </p>
                            <p>Wind</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WeatherPage
