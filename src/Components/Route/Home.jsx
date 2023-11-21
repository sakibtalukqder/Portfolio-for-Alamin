import React from 'react';
import Img from '../../assets/home.jpg'

const Home = () => {
    return (
        <div className=' px-0 md:px-0 lg:px-12 xl:pe-16 bg-green-50'>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Img} className="rounded-lg shadow-2xl w-full lg:w-1/2" />
                <div className='lg:w-1/2 w-full'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;