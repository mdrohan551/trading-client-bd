import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { OurBusinesssData } from "../../constant/Demodata";

const BusinessDetails: React.FC = () => {
  const location = useLocation();
  const { id } = location.state || {}; // id passed via Link state

  // Alternative: use URL param (if using /business-details/:id)
  // const { id } = useParams<{ id: string }>();

  const businessItem = OurBusinesssData.find(item => item.id === Number(id));

  if (!businessItem) {
    return <div className="text-center py-20">Business not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{businessItem.title}</h1>
      <p className="text-gray-700 mb-6">{businessItem.description}</p>

      <div className="text-center">
        <businessItem.icon size={80} className="text-primary mx-auto" />
      </div>
    </div>
  );
};

export default BusinessDetails;
