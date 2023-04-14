import {
  conversion,
  discord,
  logo,
  telegram,
  twitter,
} from "../../consts/constants";

const LayoutFooter = () => {
  return (
    <div>
      <div className="grid max-2xl:flex max-xl:flex-col justify-between grid-cols-5 gap-12 max-xl:gap-6 py-12 max-sm:py-4 px-36 max-xl:px-16 max-sm:px-6 text-xl border-t border-[#131325]">
        <div className="col-span-1 flex flex-col  justify-between h-full gap-4">
          <div className="flex gap-4 items-center">
            <img src={logo} className="w-12 h-12" alt="" />
            <p className="uppercase text-3xl font-bold">compete</p>
          </div>
          <div className="hidden max-2xl:flex flex-col max-xl:hidden">
            <div className="flex gap-2  py-2">
              <img src={conversion} alt="" />
              <p>$2, 936, 362</p>
            </div>
            <div className="flex gap-2  py-2">
              <p>$2, 936, 362 TVL</p>
            </div>
          </div>
          <div className="flex gap-4 items-center max-xl:hidden">
            <p className="text-md">Follow us</p>
            <img src={twitter} className="w-9 h-9" alt="" />
            <img src={telegram} className="w-9 h-9" alt="" />
            <img src={discord} className="w-9 h-9" alt="" />
          </div>
        </div>
        <div className="col-span-3 flex max-xl:grid grid-cols-4 max-lg:grid-cols-2 max-xl:gap-6 max-[420px]:grid-cols-1 gap-24 justify-center max-xl:justify-start">
          <div>
            <p className="text-md font-bold pb-4">Resources</p>
            <div className="flex flex-col gap-2 font-light text-base">
              <p>Audit</p>
              <p>Contact us</p>
              <p>Contract</p>
              <p>Documentation</p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold pb-4">Help</p>
            <div className="flex flex-col gap-2 font-light text-base">
              <p>FAQ</p>
              <p>Guide</p>
              <p>Support</p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold pb-4">Tool</p>
            <div className="flex flex-col gap-2 font-light text-base">
              <p>Analytics</p>
              <p>Bridge</p>
              <p>Coingecko</p>
              <p>DexTool</p>
              <p>GeckoTerminal</p>
              <p>Governance</p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold pb-4">Ecosystem</p>
            <div className="flex flex-col gap-2 font-light text-base">
              <p>Create a Maverick pool</p>
              <p>My Maverick pool</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-2 max-2xl:hidden max-xl:flex max-xl:flex-row max-xl:justify-start max-sm:flex-col max-sm:items-start">
          <div className="flex gap-2 px-4 py-2 border border-[#131325]">
            <img src={conversion} alt="" />
            <p>$2, 936, 362</p>
          </div>
          <div className="flex gap-2 px-4 py-2 border border-[#131325]">
            <p>$2, 936, 362 TVL</p>
          </div>
        </div>
        <div className="hidden max-xl:flex gap-4 items-center max-[420px]:justify-center">
          <p className="text-md max-[420px]:hidden">Follow us</p>
          <img src={twitter} className="w-9 h-9" alt="" />
          <img src={telegram} className="w-9 h-9" alt="" />
          <img src={discord} className="w-9 h-9" alt="" />
        </div>
      </div>
      <p className="text-center pb-6 text-xl font-light px-4">© Compete.finance 2023. All Right Reserved.</p>
    </div>
  );
};

export default LayoutFooter;
