import React from 'react';
import textIcon from '../../assets/Images/text.png'

const TextCard = ({ data }) => {
    return (
        <div className='flex items-center gap-3 sm:gap-4 
                    bg-white rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 
                    shadow-sm hover:shadow-md transition'>

            <img
                className='h-8 w-8 sm:h-10 sm:w-10 object-contain'
                src={textIcon}
                alt="text icon"
            />

            <div className='text-gray-500 text-sm sm:text-base'>
                <p>
                    <span className='text-base sm:text-xl text-black font-semibold'>
                        Text
                    </span>{' '}
                    with {data?.name}
                </p>
                <p className='text-xs sm:text-sm'> {data.next_due_date} </p>
            </div>
        </div>
    );
};

export default TextCard;