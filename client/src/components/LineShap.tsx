import React from 'react'

const LineShap:React.FC = () => {
    return (
        <>     <div className="flex justify-center items-center">
            <div className="line w-30 h-[1px] bg-primary "></div>
            <div className="w-5 h-5 rounded-full border-1 border-primary mx-3"></div>
            <div className="line w-30 h-[1px] bg-primary "></div>
        </div>
        </>
    )
}

export default LineShap