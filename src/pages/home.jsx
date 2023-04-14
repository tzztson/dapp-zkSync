import {
  conversion,
  ethereum,
  reload,
  setting,
  swap,
  usdt,
} from "../consts/constants";

const Home = () => {
  return (
    <div className="container mx-auto px-12 max-sm:px-6 py-12 w-full">
      <div className="flex justify-between max-sm:flex-col gap-4">
        <p className="text-4xl font-bold">Exchange</p>
        <div className="flex items-center gap-4 font-bold text-lg max-[420px]:flex-col max-[420px]:items-start">
          <div className="flex gap-2 items-center px-3 py-2  bg-[#131325] rounded-xl max-sm:w-full">
            <img src={conversion} className="w-8 h-8" alt="" />
            <p>$2, 936, 362</p>
          </div>
          <div className="flex gap-2 px-3 py-2  bg-[#131325] rounded-xl max-sm:w-full">
            <p>$2, 936, 362 TVL</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="border py-4 px-8 max-sm:px-4 rounded-xl border-[#131325] flex flex-col gap-4">
          <div className="flex justify-between items-center py-4">
            <p className="text-[#A4A4A9] text-2xl">Swap</p>
            <div className="flex gap-4">
              <img src={reload} className="w-6 h-6" alt="" />
              <img src={setting} className="w-6 h-6" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
                <div className="flex gap-4 flex-[1_1_20%]">
                  <img src={ethereum} className="w-12 h-12" alt="" />
                  <div>
                    <p className="text-[#A4A4A9]">From</p>
                    <select className="bg-transparent font-bold text-xl outline-none">
                      <option>ETH</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full relative text-2xl flex-[1_1_80%]">
                  <input
                    type="text"
                    placeholder="0"
                    className=" w-full outline-none  rounded-xl pl-6 pr-20  bg-[#131325] max-sm:py-2"
                  />
                  <p className="absolute pl-2 border-l border-[#A4A4A9] right-4 top-1/2 -translate-y-1/2 text-base">
                    Max
                  </p>
                </div>
              </div>
              <p className="text-right text-[#A4A4A9] pr-6">Balance: 12 ETH</p>
            </div>
            <div className="px-2 max-sm:flex items-center justify-center">
              <img src={swap} className="w-8 h-8" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex  gap-12 max-sm:flex-col max-sm:gap-4">
                <div className="flex gap-4 flex-[1_1_20%]">
                  <img src={usdt} className="w-12 h-12" alt="" />
                  <div>
                    <p className="text-[#A4A4A9]">To</p>
                    <select className="bg-transparent font-bold text-xl outline-none">
                      <option>USDT</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full relative text-2xl flex-[1_1_80%]">
                  <input
                    type="text"
                    placeholder="0"
                    className=" w-full outline-none rounded-xl px-6  bg-[#131325] max-sm:py-2"
                  />
                </div>
              </div>
              <p className="text-right text-[#A4A4A9] pr-6">Balance: 2334 USDT</p>
            </div>
          </div>
          <div className="py-6">
            <button className="w-full bg-[#DAA70C] text-xl py-2 px-6 rounded-lg font-bold max-[320px]:px-3">
              Connected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
