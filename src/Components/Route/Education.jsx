// EducationCard.jsx

import React from 'react';



const Education = () => {

    const Information = [
        {
            Institute: 'University Name',
            Status: 'Bachelor of Science in Computer Science',
            Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            PassingY: 'May 20XX',
        },
        {
            Institute: 'University Name',
            Status: 'Bachelor of Science in Computer Science',
            Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            PassingY: 'May 20XX',
        },
        {
            Institute: 'University Name',
            Status: 'Bachelor of Science in Computer Science',
            Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            PassingY: 'May 20XX',
        },

    ]



    return (
        <div className='px-0 md:px-0 lg:px-12 xl:px-16 bg-red-50'>
            <div className="py-16 mx-7">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Educational Status</h2>
                    <div className="flex flex-wrap w-full items-center justify-center gap-8">
                        {
                            Information.map((key, ind) => (
                                <div key={ind} className="bg-white rounded-md shadow-md p-6 mb-8">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-16 h-16 rounded-full mr-4"
                                            src="https://placekitten.com/200/200" // Replace with your university logo
                                            alt="University Logo"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">{key.Institute}</h3>
                                            <p className="text-gray-600">{key.Status}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        {key.Discription}
                                    </p>
                                    <p className="text-gray-700 mb-2">Graduated: {key.PassingY}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
