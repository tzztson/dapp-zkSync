import { createClient, WagmiConfig } from "wagmi";
import { connectors, provider } from "./components/wagmi";
import { WalletConnectProvider } from "./context/walletConnectProvider";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import NotFound from "./pages/notFound";
import Home from "./pages/home";
import LayoutHeader from "./components/layout/layoutHeader";
import LayoutFooter from "./components/layout/layoutFooter";

function App() {
  const client = createClient({
    autoConnect: true,
    connectors: connectors,
    provider,
  });
  return (
    <SimpleBar className="h-[100vh]">
    <WagmiConfig client={client}>
      <WalletConnectProvider>
        <div className="">
          <header className=""></header>
          <Router>
            <LayoutHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <LayoutFooter />
          </Router>
        </div>
      </WalletConnectProvider>
    </WagmiConfig>
    </SimpleBar>
  );
}

export default App;
