import React, { useRef } from 'react';

import v1 from "../../component/v1.mp4";
import v2 from "../../component/v2.mp4";
import v3 from "../../component/v3.mp4";

const features = [
    {
        video: v1,
        title: "helping hand",
        description: "a trusty companion to help you every step of the way",
        caption: "strain the mixture into a glass filled with ice."
    },
    {
        video: v2,
        title: "time together",
        description: "a conversation starter, a translator, a new way to stay in the moment",
        caption: "y recuerdo que tu favorito es chocolate."
    },
    {
        video: v3,
        title: "time together",
        description: "a conversation starter, a translator, a new way to stay in the moment",
        caption: "y recuerdo que tu favorito es chocolate."
    }
];

const ShowCase = ({ video, title, description, caption }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };
    return (


        <div className="p-4">
            <div
                className="rounded-lg overflow-hidden shadow-lg min-h-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {video ? (
                    <video
                        ref={videoRef}
                        src={video}
                        alt={title}
                        // className="w-full  sm:h-[350px]  object-full" 
                        className="w-full  sm:h-[350px]  object-cover"
                        muted
                        loop
                    />
                ) : (
                    <img src={video} alt={title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                    <p className="text-sm text-yellow-400 mb-4">{caption}</p>
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-300">{description}</p>
                    <button className="mt-4 text-orange-500 flex items-center">
                        see how
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

const Main = () => {
    return (
        <>
            <div className="bg-black text-white py-10 mt-[-5%]">
            <hr className="w-full border-t border-gray-500" />
                <h1 className="head5 text-5xl mt-10 font-semibold font-sans text-center mb-12">designed for life</h1>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ShowCase
                            key={index}
                            video={feature.video}
                            title={feature.title}
                            description={feature.description}
                            caption={feature.caption}
                        />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Main;
