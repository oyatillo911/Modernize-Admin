import { IoSearchOutline } from "react-icons/io5";
import { PiChatTextBold } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav_top  w-full  bg-[#FFFFFF] shadow-[0_1px_4px_0_#15223214]">
          <div className=" w-full  py-[20px] pl-[20px] pr-[25px] flex items-center justify-between  ">
            <div className="nav_left  w-[25.14%] flex items-center justify-between">
              <div className="nav_logo  w-[43.93%] ">
                <img className="w-full" src="/imgs/logo.svg" alt="" />
              </div>
              <div className="nav_input flex items-center justify-between w-[24.87%] h-[24px] ">
                <div className="search w-[24px] h-[24px] flex items-center justify-center  ">
                  <IoSearchOutline className="text-[15px] text-[#7E84A3] " />
                </div>

                <div className="input h-[20px] w-[65%] flex items-center justify-center ">
                  <input
                    type="search"
                    placeholder="Search..."
                    className=" outline-none h-full w-full placeholder:text-[#5A607F] text-[12px] font-normal "
                  />
                </div>
              </div>
            </div>
            <div className="nav_right w-[20.35%] h-[36px] flex items-center justify-between ">
              <div className="icons w-[23.22%] h-full flex items-center justify-between ">
                <div className="message w-[31.58%] h-[66.7%] flex items-center justify-center ">
                  <PiChatTextBold className="text-[18px] text-[#151B26] " />
                </div>
                <div className="message w-[31.58%] h-[66.7%] flex items-center justify-center ">
                  <IoNotificationsOutline className="text-[18px] text-[#151B26] " />
                </div>
              </div>
              <div className="profile w-[63.135%] h-full flex items-center justify-between ">
                <div className="logo h-[97.25%] w-[18.92%] ">
                  <img
                    className="w-full h-full "
                    src="/imgs/profile_photo.svg"
                    alt=""
                  />
                </div>
                <div className="info w-[50%] h-[97.25%] flex items-center justify-center truncate ">
                  <span className="text-[82%] w-full text-[#5A607F] font-normal ">
                    X’eriya Ponald
                  </span>
                </div>
                <div className="icon w-[12.98%] h-[66.7%] flex items-center justify-center ">
                  <div className="chevron">
                    <IoChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
