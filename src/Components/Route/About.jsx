{/* <div className=''> */ }
// About.jsx

import React from 'react';

const About = () => {
    return (
        <section className="px-0 md:px-0 lg:px-12 xl:pe-16 bg-blue-50 flex items-center h-screen">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <img
                            className="rounded-md shadow-md w-full"
                            src="https://source.unsplash.com/300x300/?girl" // Replace with your image source
                            alt="Profile"
                        />
                    </div>
                    <div className="md:w-1/2 mx-6">
                        <h2 className="text-4xl font-bold mb-8 ">About Me</h2>
                        <div className="">
                            <h3 className="text-2xl font-semibold mb-4">University Name</h3>
                            <p className="text-gray-700 mb-4">
                                Bachelor of Science in Computer Science
                            </p>
                            <p className="text-gray-700 mb-4">Graduated: May 20XX</p>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
