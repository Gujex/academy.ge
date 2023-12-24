import React from 'react';
import Link from "next/link";


const Blog = () => {
    return (
        <div style={{color: 'white'}} className="flex items-center font-light justify-center w-screen h-screen bg-[#a397cb3b]">
            <div className="text-center">
                <h1 className="text-6xl font-bold ">404</h1>
                <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
                <p className="text-xl text-gray-600 mt-4">გვერდი დამუშავების პროცესშია</p>
                <div className={'mt-3'}>
                <Link  href="/">
                    Go Back
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
