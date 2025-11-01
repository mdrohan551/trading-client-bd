import React from 'react'
import LineShap from './LineShap'

const CommonSecTitle: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <>
            {/* Title Section */}
            <div className="text-center flex flex-col justify-center items-center mb-10">
                <h2 className="text-4xl font-dm-Bold text-primary uppercase">

                    {title}
                </h2>
                <p className="text-center text-2xl text-gray-600 mt-2 mb-6 max-w-3xl">

                    {description}
                </p>
                <LineShap />
            </div>
        </>
    )
}

export default CommonSecTitle