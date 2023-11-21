// Skills.jsx

import React from 'react';

const Skills = () => {
    const skillsList = [
        { skill: 'React', level: 80 },
        { skill: 'JavaScript', level: 90 },
        { skill: 'HTML5', level: 85 },
        { skill: 'CSS3', level: 80 },
        { skill: 'Tailwind CSS', level: 75 },
        { skill: 'Responsive Design', level: 85 },
    ];

    return (
        <section className="px-0 md:px-0 lg:px-12 xl:px-16 bg-purple-50 flex items-center h-full">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Left Column */}
                <div className="md:my-8 md:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-8">My works <br /> & Experiences .......!!</h2>
                    <p className="text-gray-700">
                        Add some words here about yourself, your passion, or any additional information.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad maiores. Ipsum, quia beatae quis saepe ducimus enim doloribus perferendis asperiores accusamus velit. Nesciunt maxime voluptas voluptatem enim at facilis.</p>
                </div>

                {/* Right Column */}
                <div className="flex flex-wrap justify-center lg:w-1/2">
                    {skillsList.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md p-4 m-2 shadow-md text-gray-700 w-60"
                        >
                            <h3 className="text-lg font-semibold">{skill.skill}</h3>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                            {`${skill.level}%`}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="flex flex-col justify-center w-full">
                                        <div className="w-full bg-gray-300 rounded-full">
                                            <div
                                                className="bg-teal-500 rounded-full text-xs leading-none py-1 text-center text-white"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
