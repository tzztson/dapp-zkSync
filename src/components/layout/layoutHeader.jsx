import { logo, dots, conversion } from "../../consts/constants";

const LayoutHeader = () => {
  return (
    <div className="py-4 px-36 max-xl:px-16 max-sm:px-6 flex items-center justify-between text-xl border-b border-[#131325]">
      <div className="flex gap-6   items-center">
        <img src={logo} className="h-12 w-12" alt="" />
        <div className="flex gap-4 max-xl:hidden">
          <select className="bg-transparent outline-none">
            <option>Trade</option>
          </select>
          <select className="bg-transparent outline-none">
            <option>Earn</option>
          </select>
          <select className="bg-transparent outline-none">
            <option>xVictory</option>
          </select>
          <select className="bg-transparent outline-none">
            <option>LaunchPad</option>
          </select>
          <select className="bg-transparent outline-none">
            <option>More</option>
          </select>
        </div>
      </div>
      <div className="flex gap-6 max-[320px]:gap-2">
        <div className="flex gap-4 items-center">
          <img src={dots} className="w-6 h-6 max-sm:hidden" alt="" />
          <div className="flex gap-2 items-center">
            <img src={conversion} className="w-8 h-8" alt="" />
            <p className="max-sm:hidden">zkSync</p>
            {/* <select className="bg-transparent outline-none">
              <option>zkSync</option>
            </select> */}
          </div>
        </div>
        <button className="bg-[#DAA70C] py-2 px-6 rounded-2xl font-bold max-[320px]:px-3">
          Connect
        </button>
      </div>
    </div>
  );
};

export default LayoutHeader;
