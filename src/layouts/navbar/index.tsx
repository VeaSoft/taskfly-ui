
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navigate = useNavigate();

  return (
    <nav className="bg-white p-4">
    <div className="container mx-auto flex lg:flex-row justify-between items-center">
      <div className="lg:mb-0">
        <span className="text-[#05149D] font-bold text-[24px]"
        onClick={() => navigate("/")}
        >TaskFly</span>
      </div>
      <div className="flex items-center">
        <button
          className="lg:hidden text-black"
          onClick={toggleDropdown}
        >
          {isDropdownVisible ? (
            <HiX className="text-[#05149D] font-bold text-[24px]" />
          ) : (
            <HiMenu className="text-[#05149D] font-bold text-[24px]" />
          )}
        </button>
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-white ${
            isDropdownVisible ? 'block' : 'hidden'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-black"
              onClick={toggleDropdown}
            >
              <HiX className="text-[#05149D] font-bold text-[24px]" />
            </button>
          </div>
          <div className="flex flex-col items-center">
          <div
          onClick={() => navigate("/pricing")}
          className="text-black lg:mr-4 mb-5 cursor-pointer">
            Pricing
          </div>
          <button
          onClick={() => navigate("/login")}
          className="bg-[#05149D] text-white px-4 py-2 rounded">
            Get Started
          </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <div
          onClick={() => navigate("/pricing")}
          className="text-black lg:mr-4 cursor-pointer">
            Pricing
          </div>
          <button
          onClick={() => navigate("/login")}
          className="bg-[#05149D] text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
