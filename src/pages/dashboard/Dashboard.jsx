import { Button } from "@mui/material";
import {
  IoChevronDown,
  IoChevronUp,
  IoLogoUsd,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

// Rasmga mos keltirilgan ma'lumotlar
const data = [
  { time: "4am", May21: 25, May22: 10 },
  { time: "5am", May21: 5, May22: 15 },
  { time: "6am", May21: 5, May22: 10 },
  { time: "7am", May21: 15, May22: 25 },
  { time: "8am", May21: 25, May22: 35 },
  { time: "9am", May21: 26, May22: 30 },
  { time: "10am", May21: 30, May22: 35 },
  { time: "11am", May21: 10, May22: 50 },
  { time: "12am", May21: 20, May22: 45 },
  { time: "1pm", May21: 35, May22: 8 },
  { time: "2pm", May21: 40, May22: 32 },
  { time: "3pm", May21: 38, May22: 47 },
];

const base = [
  { day: "12", sales: 1200 },
  { day: "13", sales: 1800 },
  { day: "14", sales: 1400 },
  { day: "15", sales: 1600 },
  { day: "16", sales: 2100 },
  { day: "17", sales: 2525 },
  { day: "18", sales: 2400 },
];

const CustomTool = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2B3650] text-white px-3 py-1.5 rounded-lg shadow-lg text-center font-sans whitespace-nowrap  ">
        <p className="font-bold text-sm">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const item = payload.find((p) => p.dataKey === "May22") || payload[0];
    return (
      <div className="bg-[#2B3650] text-white p-3 rounded-lg shadow-lg text-center font-sans">
        <p className="font-bold text-lg">{item.value} Orders</p>
        <p className="text-xs text-gray-300">May 22, {label}</p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  return (
    <>
      <div className="hero w-[100%]  ">
        <div className="info w-full flex items-center justify-between ">
          <h1 className="text-[24px] font-bold text-[#131523]">Dashboard</h1>
          <div className="btn w-[11.63%] ">
            <Button
              sx={{
                background: "#FFFFFF",
                border: "1px solid #D7DBEC",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                width: "100%",
                height: "40px",
              }}
              variant="outlined"
            >
              <IoSettingsOutline className=" text-[20px] text-[#1E5EFF] " />
              <span className="text-[16px] font-normal text-[#1E5EFF] ">
                Manage
              </span>
            </Button>
          </div>
        </div>
        <div className="box w-full shadow-[0_1px_4px_0_#15223214] bg-[#FFFFFF] rounded-[6px] flex items-center justify-between my-[30px] ">
          <div className="cards w-[25%] py-[28px] pr-[42px] pl-[28px]  flex items-center justify-between ">
            <div className="info flex items-start flex-col gap-[10px] ">
              <div className="multi_info flex items-start flex-col gap-[5px] ">
                <h2 className="text-[20px] text-[#131523] font-bold leading-none">
                  $10.540
                </h2>
                <span className="text-[14px] text-[#5A607F] font-normal ">
                  Total Revenue
                </span>
              </div>
              <div className="present flex items-center gap-[10px] ">
                <span className="text-[#06A561] text-[14px] font-normal">
                  22.45%
                </span>
                <div className="chevron  ">
                  <IoChevronUp className="text-[#06A561] text-[17px]  " />
                </div>
              </div>
            </div>
            <div className="icons w-[56px] h-[56px] bg-[#ECF2FF] rounded-[50%] flex items-center justify-center ">
              <IoLogoUsd className="text-[#1E5EFF] text-[20px]  " />
            </div>
          </div>
          <div className="cards w-[25%] py-[28px] pr-[42px] pl-[28px]  flex items-center justify-between border-x-[1px] border-x-[#E6E9F4] ">
            <div className="info flex items-start flex-col gap-[10px] ">
              <div className="multi_info flex items-start flex-col gap-[5px]">
                <h2 className="text-[20px] text-[#131523] font-bold leading-none">
                  1,056
                </h2>
                <span className="text-[14px] text-[#5A607F] font-normal ">
                  Orders
                </span>
              </div>
              <div className="present flex items-center gap-[10px] ">
                <span className="text-[#06A561] text-[14px] font-normal">
                  15.34%
                </span>
                <div className="chevron  ">
                  <IoChevronUp className="text-[#06A561] text-[17px]  " />
                </div>
              </div>
            </div>
            <div className="icons w-[56px] h-[56px] bg-[#ECF2FF] rounded-[50%] flex items-center justify-center ">
              <MdOutlineShoppingCart className="text-[#1E5EFF] text-[20px]  " />
            </div>
          </div>
          <div className="cards w-[25%] py-[28px] pr-[42px] pl-[28px]  flex items-center justify-between border-r-[1px] border-r-[#E6E9F4] ">
            <div className="info flex items-start flex-col gap-[10px] ">
              <div className="multi_info flex items-start flex-col gap-[5px] ">
                <h2 className="text-[20px] text-[#131523] font-bold leading-none">
                  48
                </h2>
                <span className="text-[14px] text-[#5A607F] font-normal ">
                  Active Sessions
                </span>
              </div>
              <div className="present flex items-center gap-[10px] ">
                <span className="text-[#F0142F] text-[14px] font-normal">
                  18.25%
                </span>
                <div className="chevron  ">
                  <IoChevronDown className="text-[#F0142F] text-[17px]  " />
                </div>
              </div>
            </div>
            <div className="icons w-[56px] h-[56px] bg-[#ECF2FF] rounded-[50%] flex items-center justify-center  ">
              <IoPersonOutline className="text-[#1E5EFF] text-[20px]  " />
            </div>
          </div>
          <div className="cards w-[25%] py-[28px] pr-[42px] pl-[28px]  flex items-center justify-between ">
            <div className="info flex items-start flex-col gap-[10px] ">
              <div className="multi_info flex items-start flex-col gap-[5px] ">
                <h2 className="text-[20px] text-[#131523] font-bold leading-none">
                  5.420
                </h2>
                <span className="text-[14px] text-[#5A607F] font-normal ">
                  Total Sessions
                </span>
              </div>
              <div className="present flex items-center gap-[10px] ">
                <span className="text-[#F0142F] text-[14px] font-normal">
                  10.24%
                </span>
                <div className="chevron  ">
                  <IoChevronDown className="text-[#F0142F] text-[17px]  " />
                </div>
              </div>
            </div>
            <div className="icons w-[56px] h-[56px] bg-[#ECF2FF] rounded-[50%] flex items-center justify-center ">
              <RiGroupLine className="text-[#1E5EFF] text-[20px]  " />
            </div>
          </div>
        </div>
      </div>

      <section className="w-[100%]  flex items-start justify-between ">
        {/* Line Chart Qismi */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-[74.33%] h-[469px] ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Orders Over Time
            </h2>
            <select className="border-none bg-transparent text-gray-500 font-medium text-sm focus:outline-none cursor-pointer">
              <option>Last 12 Hours</option>
              <option>Last 24 Hours</option>
            </select>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">645</h3>
                <p className="text-sm text-gray-500">Orders on May 22</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">472</h3>
                <p className="text-sm text-gray-500">Orders on May 21</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-200 rounded-sm inline-block"></span>
                May 21
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-sm inline-block"></span>
                May 22
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#F3F4F6" />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  domain={[0, 50]}
                  ticks={[0, 10, 20, 30, 40, 50]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="May21"
                  stroke="#E5E7EB"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="May22"
                  stroke="#2563EB"
                  strokeWidth={3.5}
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: "#2563EB",
                    stroke: "#fff",
                    strokeWidth: 3,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Qismi */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-[23%] h-[469px] relative">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Last 7 Days Sales
          </h2>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">1,259</h3>
              <p className="text-sm text-gray-500">Items Sold</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">$12,546</h3>
              <p className="text-sm text-gray-500">Revenue</p>
            </div>
          </div>

          <div className="h-44 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={base}
                margin={{ top: 25, right: 10, left: 10, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <Tooltip
                  content={<CustomTool />}
                  cursor={{ fill: "transparent" }}
                  // wrapperStyle yordamida tooltip markazga keltiriladi va tepaga joylashadi
                  wrapperStyle={{
                    top: -10,
                    transform: "translate(-50%, -100%)",
                    pointerEvents: "none",
                  }}
                />
                <Bar
                  dataKey="sales"
                  fill="#22C55E"
                  radius={[6, 6, 0, 0]}
                  barSize={12}
                >
                  {base.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#22C55E" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className=" max-w-full pt-[30px] flex items-start justify-between ">
   <div className="transactions  w-[49%] px-[28px] pt-[28px] pb-[20px] border-[1px] border-[#E6E9F4] bg-[#FFFFFF] rounded-[6px]  ">
    <div className="info pb-[20px] ">
      <h2 className="text-[16px] font-bold text-[#131523] " >Recent Transactions</h2>
    </div>
   <table className="w-full " >
    <tr className="flex items-start justify-between  p-[10px] w-full  " >
      <th className=" w-[24%] text-[#5A607F] font-normal  text-[14px] text-start " >Name</th>
      <th className=" w-[24%] text-[#5A607F] font-normal  text-[14px] text-start " >Date</th>
      <th className=" w-[24%] text-[#5A607F] font-normal  text-[14px] text-start " >Amount</th>
      <th className=" w-[24%] text-[#5A607F] font-normal  text-[14px] text-start " >Status</th>
    </tr>
    <tr className="flex items-start justify-between w-full h-[58px] px-[10px] py-[15px] border-t-[2px] border-t-[#E6E9F4] " >
      <td className="text-start w-[24%] text-[14px] font-medium text-[#131523]  " >Jessica S.</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >24.05.2026</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >$124.97</td>
      <td className="text-start w-[24%]" ><span className=" text-[14px] cursor-pointer font-normal h-[24px] flex items-center justify-center w-[40.25%] bg-[#C4F8E2] rounded-[4px] text-[#06A561] h-[24px] " >Paid</span></td>
    </tr>
    <tr className="flex items-start justify-between w-full px-[10px] h-[58px] py-[15px] border-t-[2px] border-t-[#E6E9F4] " >
      <td className="text-start w-[24%] text-[14px] font-medium text-[#131523]  " >Andrew S.</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >23.05.2026</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >$55.42</td>
      <td className="text-start w-[24%]" ><span className=" text-[14px] cursor-pointer font-normal h-[24px] flex items-center justify-center w-[62.61%] bg-[#E6E9F4] rounded-[4px] text-[#5A607F] h-[24px] " >Pending</span></td>
    </tr>
    <tr className="flex items-start justify-between w-full px-[10px] h-[58px] py-[15px] border-t-[2px] border-t-[#E6E9F4] " >
      <td className="text-start w-[24%] text-[14px] font-medium text-[#131523]  " >Kevin S.</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >23.05.2026</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >$89.90</td>
      <td className="text-start w-[24%]" ><span className=" text-[14px] cursor-pointer font-normal h-[24px] flex items-center justify-center w-[40.25%] bg-[#C4F8E2] rounded-[4px] text-[#06A561] h-[24px] " >Paid</span></td>
    </tr>
    <tr className="flex items-start justify-between w-full px-[10px] h-[58px] py-[15px] border-t-[2px] border-t-[#E6E9F4] " >
      <td className="text-start w-[24%] text-[14px] font-medium text-[#131523]  " >Jack S.</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >22.05.2026</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >$144.94</td>
      <td className="text-start w-[24%]" ><span className=" text-[14px] cursor-pointer font-normal h-[24px] flex items-center justify-center w-[62.61%] bg-[#E6E9F4] rounded-[4px] text-[#5A607F] h-[24px] " >Pending</span></td>
    </tr>
    <tr className="flex items-start justify-between w-full px-[10px] h-[58px] py-[15px] border-t-[2px] border-t-[#E6E9F4] " >
      <td className="text-start w-[24%] text-[14px] font-medium text-[#131523]  " >Arthur S.</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >22.05.2026</td>
      <td className="text-start w-[24%] text-[14px] font-normal text-[#131523] " >$70.52</td>
      <td className="text-start w-[24%]" ><span className=" text-[14px] cursor-pointer font-normal h-[24px] flex items-center justify-center w-[40.25%] bg-[#C4F8E2] rounded-[4px] text-[#06A561] h-[24px] " >Paid</span></td>
    </tr>
   </table>
   </div>
   <div className="Top Products  w-[49%] px-[28px] pt-[28px] pb-[20px] border-[1px] border-[#E6E9F4] bg-[#FFFFFF] rounded-[6px]  ">
    <div className="info pb-[20px] ">
      <h2 className="text-[16px] font-bold text-[#131523] " > Top Products by Units Sold</h2>
    </div>
   <table className="w-full " >
    <tr className="flex items-start justify-between p-[10px] w-full  " >
      <div className=" w-[53.24%] ">
      <th className="   text-[#5A607F] font-normal  text-[14px] text-start " >Name</th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#5A607F] font-normal  text-[14px] text-start " >Price</th>
      <th className=" w-[44.45%] text-[#5A607F] font-normal  text-[14px] text-start " >Units Sold</th>
      </div>
      
    </tr>
    <tr className="flex items-center justify-between w-full p-[10px]  border-t-[2px] border-t-[#E6E9F4] " >
      
      <div className=" w-[53.24%] ">
      <th className="   text-[#131523] font-medium  text-[14px] text-start flex items-center gap-[12px] " >
        <div className="logo w-[36px] h-[36px]  ">
          <img className="w-full h-full " src="/imgs/dashboard1.svg" alt="" />
        </div>
        <span className=" inline-block  w-[81%]  text-start " >Men Grey Hoodie</span>
      </th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >$49.90</th>
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >204</th>
      </div>
      
    </tr>
    <tr className="flex items-center justify-between w-full p-[10px]  border-t-[2px] border-t-[#E6E9F4] " >
      
      <div className=" w-[53.24%] ">
      <th className="   text-[#131523] font-medium  text-[14px] text-start flex items-center gap-[12px] " >
        <div className="logo w-[36px] h-[36px]  ">
          <img className="w-full h-full " src="/imgs/dashboard2.svg" alt="" />
        </div>
        <span className=" inline-block  w-[81%]  text-start " >Women Striped T-Shirt</span>
      </th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >$34.90</th>
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >155</th>
      </div>
      
    </tr>
    <tr className="flex items-center justify-between w-full p-[10px]  border-t-[2px] border-t-[#E6E9F4] " >
      
      <div className=" w-[53.24%] ">
      <th className="   text-[#131523] font-medium  text-[14px] text-start flex items-center gap-[12px] " >
        <div className="logo w-[36px] h-[36px]  ">
          <img className="w-full h-full " src="/imgs/dashboard3.svg" alt="" />
        </div>
        <span className=" inline-block  w-[81%]  text-start" >Wome White T-Shirt</span>
      </th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >$40.90</th>
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >120</th>
      </div>
      
    </tr>

    <tr className="flex items-center justify-between w-full p-[10px]  border-t-[2px] border-t-[#E6E9F4] " >
      
      <div className=" w-[53.24%] ">
      <th className="   text-[#131523] font-medium  text-[14px] text-start flex items-center gap-[12px] " >
        <div className="logo w-[36px] h-[36px]  ">
          <img className="w-full h-full " src="/imgs/dashboard4.svg" alt="" />
        </div>
        <span className=" inline-block  w-[81%]  text-start " >Men White T-Shirt</span>
      </th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >$49.90</th>
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >204</th>
      </div>
      
    </tr>
    <tr className="flex items-center justify-between w-full p-[10px]  border-t-[2px] border-t-[#E6E9F4] " >
      
      <div className=" w-[53.24%] ">
      <th className="   text-[#131523] font-medium  text-[14px] text-start flex items-center gap-[12px] " >
        <div className="logo w-[36px] h-[36px]  ">
          <img className="w-full h-full " src="/imgs/dashboard5.svg" alt="" />
        </div>
        <span className=" inline-block  w-[81%]  text-start " >Women Red T-Shirt</span>
      </th>
      </div>
      <div className=" flex items-center justify-between w-[38.638%] ">
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >$34.90</th>
      <th className=" w-[44.45%] text-[#131523] font-normal  text-[14px] text-start " >155</th>
      </div>
      
    </tr>
   </table>
   </div>
      </section>
    </>
  );
}

export default Dashboard;
