// import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
// import { Loading } from "./components/LoadingScreen/Loading";

function App() {
  // const [loadingScreen, setloadingScreen] = useState(false);
  // useEffect(() => {
  //   setloadingScreen(true);
  //   setTimeout(() => {
  //     setloadingScreen(false);
  //   }, 4000);
  // }, []);
  return (
    // {loadingScreen ? (
    //   <Loading />
    //   ) : (
    // }
    <div className="App ">
      <div className="AppContainer">
        <Navbar />
        <Sidebar />
      </div>
      )
    </div>
  );
}

export default App;
