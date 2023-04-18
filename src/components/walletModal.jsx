import { WalletConnectContext } from "../context/walletConnectProvider";
import { useState, useEffect, useContext, useRef } from "react";
// import handleSwitchNetwork from "@/components/handleSwitchNetwork";

const WalletModal = (props) => {
  const { isConnected } = useContext(WalletConnectContext);

  const [checkConnect, setCheckConnect] = useState(false);

  useEffect(() => {
    setCheckConnect(isConnected);
  }, [isConnected]);

  const { connectors, connect } = useContext(WalletConnectContext);
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.closeModal();
    }
  };
  return (
    <div className="z-20">
      {props.openModal && !checkConnect && (
        <div
          className="fixed top-0 left-0 bg-[#00000050] w-full h-full"
          onClick={handleOutsideClick}
        >
          <div
            className=" max-sm:w-[90%] fixed bg-[#07071C] border border-blue-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl"
            ref={modalRef}
          >
            <span
              className="text-[#a4a4a9] text-4xl font-bold float-right px-2"
              onClick={props.closeModal}
            >
              &times;
            </span>
            <div className="text-bold px-12 max-sm:px-4 py-12 w-full">
              {connectors.map((connector, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => connect({ connector })}
                    className="bg-[#131325] text-white shadow-xl border rounded-lg my-3 cursor-pointer border-blue-300 w-full text-black px-6 py-2 hover:bg-blue-400 flex gap-8  items-center"
                  >
                    <img
                      src={require(`../assets/img/svg/${index + 1}.svg`)}
                     className="w-12 h-12 max-sm:w-9 max-sm:h-9"
                      alt=""
                    />
                    <span className="max-[320px]:text-sm">{connector.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletModal;
