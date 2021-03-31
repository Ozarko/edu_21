import React from "react";
import Alert from "./sandbox/useContext/Alert";
import { AlertProvider } from "./sandbox/useContext/AlertContext";
import Main from "./sandbox/useContext/Main";

function App() {
  return (
    <AlertProvider>
      <div className={"container pt-3"}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
