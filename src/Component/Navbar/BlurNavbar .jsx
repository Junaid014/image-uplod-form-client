import { useState } from "react";
import { Link, useLocation } from "react-router";

const BlurNavbar = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                to={item.path}
                className={`block transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-[2px] opacity-50"
                    : "blur-0 opacity-100"
                }`}
              >
                {item.name}
              </Link>

              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out ${
                  hoveredIndex === index || isActive ? "w-full" : "w-0"
                }`}
              ></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BlurNavbar;
