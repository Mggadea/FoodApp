import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <div className="AppContainer">
        <div>
          <Navbar />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
