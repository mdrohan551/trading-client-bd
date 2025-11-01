import React from "react";
import { headerContact, headerSocialMenu } from "../../constant/Demodata";

const TopNav: React.FC = () => {
  return (
    <div className="max-w-[1536px] mx-auto flex justify-between items-center">


      <ul className="flex gap-5 px-5 ">
        {headerSocialMenu.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center  font-dm-Light text-sm ring-[1px] ring-gray-600 p-[0.2rem] rounded-md hover:bg-primary hover:ring-primary hover:text-white  "
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  transition-colors duration-200"
            >
              <item.icon size="15px" />
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex ">
        {headerContact.map((item, idx) => {
          // ✅ href logic
          let href = "#";
          if (item.type === "phone") href = `callto:${item.value}`;
          else if (item.type === "email") href = `mailto:${item.value}`;
          else if (item.type === "location") href = item.value;

          return (
            <li
              key={idx}
              className="flex items-center px-5 py-5 font-dm-Light text-sm"
            >
              <a
                href={href}
                target={item.type === "location" ? "_blank" : undefined}
                rel={item.type === "location" ? "noopener noreferrer" : undefined}
                className="flex items-center hover:text-primary transition-colors duration-200"
              >
                <item.icon size="15px" />
                <span className="ml-2">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default TopNav;
