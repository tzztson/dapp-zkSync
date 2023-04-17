import {useAccount, useConnect, useDisconnect } from "wagmi";
import { createContext } from "react";

// import { NETWORK_DATA } from "../utils/const_utils";

const WalletConnectContext = createContext({});

const WalletConnectProvider = (props) => {
  const { address, isConnected } = useAccount();

  // const [currentNetwork, setCurrentNetwork] = useState(NETWORK_DATA[0]);

  const { disconnect } = useDisconnect();

  const { connectors, connect } = useConnect({
    onSuccess() {
      console.log("success");
    },
  });

  const logout = () => {
    disconnect();
  };

  // const handleCurrentNetwork = (chain) => {
  //     setCurrentNetwork(chain === "ETH" ? NETWORK_DATA[0] : NETWORK_DATA[1])
  // }

  return (
    <WalletConnectContext.Provider
      value={{
        connectors,
        connect,
        isConnected,
        address,
        // currentNetwork,
        // handleCurrentNetwork,
        logout,
      }}
    >
      {props.children}
    </WalletConnectContext.Provider>
  );
};

export { WalletConnectContext, WalletConnectProvider };
