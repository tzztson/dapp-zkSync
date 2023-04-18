const SettingContents = () => {
  return (
    <div className="px-8 max-sm:px-6 pt-6 pb-12 flex flex-col gap-8">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label>Slippage (%) </label>
            <input
              type="text"
              className="bg-[#131325] text-white  rounded-xl placeholder-white py-2 px-[20px] outline-none w-full max-md:w-full"
              placeholder="0.5"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Deadline (mins) </label>
            <input
              type="text"
              className="bg-[#131325] text-white  rounded-xl placeholder-white py-2 px-[20px] outline-none w-full max-md:w-full"
              placeholder="20"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Max hops</label>
            <input
              type="text"
              className="bg-[#131325] text-white  rounded-xl placeholder-white py-2 px-[20px] outline-none w-full max-md:w-full"
              placeholder="4"
            />
          </div>
        </div>
        <div className="flex justify-between font-bold text-xl gap-12 max-lg:gap-6 max-lg:flex-col">
          <button className="bg-[#131325] rounded-xl px-6 py-2">
            Reset to defaults
          </button>
          <button className="bg-[#DAA70C] rounded-xl px-6 py-2">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingContents;
