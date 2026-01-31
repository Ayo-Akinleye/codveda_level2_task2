import BackgroundImg from '../assets/bg-image-1.jpg'
import sunImg from '../assets/sun-image.png'
import SearchInput from './SearchInput'

const WeatherPage = () => {
    return (
        <section className='h-screen'>
            <div
                className='h-full flex flex-col p-5 gap-7 items-center w-full bg-gray-900 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            >
                <SearchInput />

                <div className='flex flex-col items-center bg-white/30 backdrop-blur-md p-15 rounded-lg gap-8'>
                    <p className='font-semibold text-2xl'>LAGOS, NIGERIA</p>

                    <div className='grid md:grid-cols-2 justify-center items-center gap-6'>

                        <img src={sunImg} alt="Illustration of the sun" className='h-40 w-40' />

                        <div className='flex flex-col items-center gap-2'>
                            <h2 className='font-bold text-3xl'>0°C</h2>
                            <p className='text-2xl font-semibold'>Sunny</p>
                        </div>

                    </div>

                    <h3 className='font-semibold text-xl'>30th, January 2026</h3>
                </div>
            </div>
        </section>
    )
}

export default WeatherPage
