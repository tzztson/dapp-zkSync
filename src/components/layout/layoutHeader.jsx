import { logo, dots, conversion } from "../../consts/constants";
import { useState, useEffect, useContext } from "react";
import WalletModal from "../walletModal";
import SelectCustom from "../selectCustom";
import { WalletConnectContext } from "../../context/walletConnectProvider";

const LayoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Connect");

  const { isConnected, address, logout } = useContext(WalletConnectContext);

  useEffect(() => {
    const walletAddress = address ?? "";
    const showAddress = `${walletAddress?.substr(
      0,
      4
    )}...${walletAddress?.substr(-4)}`;
    setButtonText(isConnected ? `${showAddress}` : "Connect");
    if (isConnected) {
      handleCloseModal();
    }
  }, [isConnected, address]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="py-4 px-36 max-xl:px-16 max-sm:px-6 flex items-center justify-between text-xl border-b border-[#131325]">
      <div className="flex gap-4  items-center">
        <img src={logo} className="h-12 w-12" alt="" />
        <div className="flex max-xl:hidden">
          <SelectCustom>
            <option>Trade</option>
          </SelectCustom>
          <SelectCustom>
            <option>Earn</option>
          </SelectCustom>
          <SelectCustom>
            <option>xVictory</option>
          </SelectCustom>

          <SelectCustom>
            <option>LaunchPad</option>
          </SelectCustom>

          <SelectCustom>
            <option>More</option>
          </SelectCustom>
        </div>
      </div>
      <div className="flex gap-2 max-[320px]:gap-2">
        <div className="flex gap-4 items-center">
          <img src={dots} className="w-6 h-6 max-sm:hidden" alt="" />
          <div className="flex gap-2 items-center">
            <img src={conversion} className="w-8 h-8" alt="" />
            <SelectCustom>
              <option>zkSync</option>
            </SelectCustom>
          </div>
        </div>
        <button
          className="bg-[#DAA70C] py-2 px-6 rounded-2xl font-bold max-[320px]:px-3"
          onClick={isConnected ? logout : handleOpenModal}
        >
          {buttonText}
        </button>
        <WalletModal openModal={isOpen} closeModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default LayoutHeader;
