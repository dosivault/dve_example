import { useEffect, useState } from "react";
import "./App.css";

const CHAIN_ID = "finschia-1";

function App() {
  const [address, setAddress] = useState(null);

  return (
    <div>
      <div className="p-4 flex items-center border-b">
        <img
          className="h-8 w-8"
          src="https://play-lh.googleusercontent.com/hN4VqQ8IJyZQ4NE-0yGb7q6urQdDIgJRicQWmiELbOmoPAykLtehq3-dL3FewtkSovM=w240-h480-rw"/>
        <div className="mx-4 flex-grow">
            <div className="text-xl font-medium">dApp Example</div>
            <div className="text-slate-500 text-xs">
                <a href="https://vault.dosi.world/">DOSI Vault Extension</a>
            </div>
        </div>
        <div hidden={ window.dosiVault }>
          <a href="https://vault.dosi.world/">Go Install DOSI Vault</a>
        </div>
        <div hidden={ !window.dosiVault || address }>
          <button onClick={async () => {
            // Enabling before using the Dosi Vault.
            // This method will ask the user whether to allow access if they haven't visited this website.
            // Also, it will request that the user unlock the wallet if the wallet is locked.
            await dosiVault.enable(CHAIN_ID);
            const accounts = await dosiVault.getOfflineSigner(CHAIN_ID).getAccounts();
            // currently length of accounts is 0 or 1
            setAddress(accounts[0].address);
          }}>Get Account</button>
        </div>
        <div hidden={ !address }>
          {address}
        </div>
      </div>

      <footer className="fixed w-full bottom-0 border-t p-4 flex">
        <a href="https://github.com/dosivault/wc_v1_example">Source code</a>
      </footer>
    </div>
  );
}

export default App;
