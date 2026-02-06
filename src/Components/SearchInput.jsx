import { Search } from "lucide-react";
import { useState } from 'react';

const SearchInput = ({ getWeather }) => {
    const [name, setName] = useState("");

    const handleCitySearch = (e) => {
        e.preventDefault();
        if (name.trim()) {
            getWeather(name);
            setName("");
        }
    }

    return (
        <form
            className="border border-white flex items-center py-1 px-3 rounded-lg text-white"
            onSubmit={handleCitySearch}
        >
            <input
                type="search"
                placeholder='city, country'
                value={name}
                className='mx-3 font-semibold focus:outline-none focus:text-gray-500 bg-transparent'
                onChange={e => setName(e.target.value)}
            />
            <button type="submit">
                <Search
                    size={16}
                    className="cursor-pointer"
                />
            </button>
        </form>
    )
}

export default SearchInput
