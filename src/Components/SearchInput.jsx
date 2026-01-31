import { Search } from "lucide-react";

const SearchInput = () => {

    return (
        <form className="border border-white flex items-center py-1 px-3 rounded-lg text-white">
            <input type="search" placeholder='search' className='' />
            <button>
                <Search size={16} />
            </button>
        </form>
    )
}

export default SearchInput
