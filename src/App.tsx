import "./App.css";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import DashboardTemplate from "./containers/templates/Dashboard";
function App() {
  // const handle = useFullScreenHandle();
  
  return (
    <div className="App">
      {/* <FullScreen handle={handle}> */}
        {/* <Layout />
        <RoutesAuth /> */}
        <DashboardTemplate />
      {/* </FullScreen> */}
    </div>
  );
}

export default App;
