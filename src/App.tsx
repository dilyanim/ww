import { Routes ,  Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Popular from "./components/pages/Popular";
import TopRated from "./components/pages/TopRated";
import Upcoming from './components/pages/Upcoming'
function App() {
  return (
    <div
      // style={{
      //   background: dark ? "#212339" : "white",
      //   transform: "1s",
      //   transition: "1s",
      // }}
      className="App"
    >
     <Header/>
     <Routes>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/top" element={<TopRated/>}/>
      <Route path="/up" element={<Upcoming/>}/>

     </Routes>
     <Popular/>
    </div>
  );
}

export default App;