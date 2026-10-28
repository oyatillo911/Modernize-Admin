import {
  IoBarChartOutline,
  IoHomeOutline,
  IoPricetagOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { RiGroupLine } from "react-icons/ri";
import { GoListOrdered } from "react-icons/go";
import { TiStarOutline } from "react-icons/ti";
import { PiChatTextBold, PiMedalLight } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";


function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="  container  w-[250px] bg-[#F5F6FA] min-h-[calc(140vh-89px)] border-r-[1px] border-r-[#D7DBEC]  ">
          <div className="box w-full px-[15px] py-[20px] flex items-start flex-col gap-[5px]  ">
            <div className="cards   px-[16px] py-[10px] flex items-center gap-[20px]  w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <IoHomeOutline className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info  flex items-center justify-center">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Dashboard
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px]  w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <GoListOrdered className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Orders
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <IoPricetagOutline className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Products
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <FaRegFolder className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Categories
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <RiGroupLine className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Customers
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <IoBarChartOutline className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Reports
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <TiStarOutline className="text-[24px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Coupons
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <PiChatTextBold className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center  ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Inbox
                </span>
              </div>
            </div>
            <div className="other px-[16px] pt-[20px] pb-[7px] ">
              <span className="text-[#A1A7C4] text-[12px] font-normal leading-[16px] ">
                Other Information
              </span>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <MdHelpOutline className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Knowledge Base
                </span>
              </div>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <PiMedalLight className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Product Updates
                </span>
              </div>
            </div>
            <div className="settings px-[16px] pt-[20px] pb-[7px] ">
              <span className="text-[#A1A7C4] text-[12px] font-normal leading-[16px] ">
              Settings
              </span>
            </div>
            <div className="cards px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <BsPerson className="text-[20px] text-[#7E84A3]" />
              </div>
              <div className="info flex items-center justify-center ">
                <span className=" text-[14px] font-normal text-[#5A607F] ">
                  Personal Settings
                </span>
              </div>
            </div>
            <div className="group px-[16px] py-[10px] flex items-center gap-[20px] w-[94.8%] h-[44px]  rounded-[4px] cursor-pointer ">
              <div className="icons w-[12.905%] h-[100%] flex items-center justify-center  ">
                <IoSettingsOutline className="text-[20px] text-[#7E84A3]  " />
              </div>
              <div className="info flex items-center justify-center ">
                <span className="  text-[14px] font-normal text-[#5A607F]  ">
                  Global Settings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
