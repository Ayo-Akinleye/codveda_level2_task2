import sunImg from '../assets/sun-image.png';
import rainImg from '../assets/Rain image.png';
import thunderImg from '../assets/Thunderstorm image.png';
import cloudImg from '../assets/cloud-image2.png';

const WeatherImage = ({ condition }) => {
    // Object mapping
    const Images = {
        'clear': sunImg,
        'sunny': sunImg,
        'rain': rainImg,
        'thunder storm': thunderImg,
        'clouds': cloudImg,
    }

    const getImage = () => {
        if (!condition) return sunImg;
        const weatherCondition = condition.toLowerCase();
        return Images[weatherCondition] || sunImg;
    }
    return (
        <img
            src={getImage()}
            alt={`${condition} Weather`}
            className='h-40 w-40'
        />
    )
}

export default WeatherImage
