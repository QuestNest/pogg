import { inter } from "@/fonts/fonts";

const Searchbar = () => {
    return (
        <div className={`relative w-full mt-8 ${inter.className} font-semibold`}>
            <input
                type="text"
                placeholder="Search Yourself or a Champion"
                className="w-full py-4 pr-24 pl-4 text-base sm:text-l text-xl text-stone-600 bg-white rounded-lg shadow-md focus:outline-none"
            />
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-dark-gray-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Searchbar;
