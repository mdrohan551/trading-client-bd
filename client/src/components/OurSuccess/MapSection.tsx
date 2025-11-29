import React from "react";
import { MapData } from "../../constant/Demodata";


const MapSection: React.FC = () => {
  return (
    <div className="w-full h-full mt-8 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
      <iframe
        src={MapData.mapLink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={MapData.locationName}
      ></iframe>
    </div>
  );
};

export default MapSection;
