const Searchbar = () => {
    return (
        <div className="relative w-full mt-8">
            <input
                type="text"
                placeholder="Search Yourself or a Champion"
                className="w-full py-4 pr-24 pl-4 text-xl text-gray-700 bg-white border border-purple-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-purple-500">
                Search
            </button>
        </div>
    );
};

export default Searchbar;
