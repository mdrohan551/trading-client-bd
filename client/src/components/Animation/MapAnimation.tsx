import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const MapAnimation:React.FC = () => {
  return (
<div className="w-90 brightness-50 sm:brightness-100 h-90 -mt-20">
      <DotLottieReact
        src="/LottieAnimation/MapRouteAnimation.lottie" // public folder path
        loop
        autoplay
      />
    </div>
  )
}

export default MapAnimation