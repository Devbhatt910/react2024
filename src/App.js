import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
// import UseStateBooleanDemo from "./components/UseStateBooleanDemo";
import NetflixHome from "./NetFlix/NetflixHome";
import NavBar from "./NavBar";
import NetflixMovies from "./NetFlix/NetflixMovies";
import NetflixShows from "./NetFlix/NetflixShows";
import NetflixErrorPage from "./NetFlix/NetflixErrorPage";
import ThrillerMovies from "./NetFlix/ThrillerMovies";
import ComedyMovies from "./NetFlix/ComedyMovies";
import PlayShow from "./NetFlix/PlayShow";
import FormDemo from "./forms/FormDemo";
import FormDemo2 from "./forms/FormDemo2";
import Button from "./NetFlix/Button";
import DepentDropDown from "./components/DepentDropDown";
import DemoGetApiCalling from "./Api/DemoGetApiCalling";
// import UseStateArrayDemo from "./components/UseStateArrayDemo";
// import UseStateCountDemo from "./components/UseStateCountDemo";
// import Header from "./components/Header";
// import MapDemo from "./components/MapDemo";
// import Stu from "./components/Stu";

function App() {
  // var title = "React";
  // var color = "red";

  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path="" element={<NetflixHome />}></Route>
        <Route path="/movies" element={<NetflixMovies />}></Route>
        <Route path="/shows" element={<NetflixShows />}></Route>
        <Route path="/movies/thriller" element={<ThrillerMovies />}></Route>
        <Route path="/movies/comedy" element={<ComedyMovies />}></Route>
        <Route path="/*" element={<NetflixErrorPage />}></Route>
        <Route path="/shows/play/:id" element={<PlayShow />}></Route>
        <Route path="/formdemo" element={<FormDemo />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
      </Routes> */}
      {/* <Button /> */}
      {/* <DepentDropDown /> */}
       <DemoGetApiCalling /> 
    </div>
  );
}

export default App;
