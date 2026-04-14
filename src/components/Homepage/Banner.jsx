import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gray-100 py-10 md:py-16">
            <div className="w-11/12 md:w-10/12 mx-auto px-4 text-center">
                
               
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-6 px-2">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                <button className="bg-[#244D3F] text-white px-8 py-3 rounded-md hover:bg-[#1e3f34] transition w-full sm:w-auto font-medium">
                    + Add a Friend
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F]">10</h2>
                        <p className="text-gray-500 text-sm md:text-base mt-2">Total Friends</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F]">3</h2>
                        <p className="text-gray-500 text-sm md:text-base mt-2">On Track</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F]">6</h2>
                        <p className="text-gray-500 text-sm md:text-base mt-2">Need Attention</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F]">12</h2>
                        <p className="text-gray-500 text-sm md:text-base mt-2 leading-tight">
                            Interactions This Month
                        </p>
                    </div>

                </div>

                <div className="text-left mt-16 border-t pt-10">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">All Friends</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;