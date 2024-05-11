import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import UseStateBooleanDemo from "./components/UseStateBooleanDemo";
import NetflixHome from "./NetFlix/NetflixHome";
import NavBar from "./NavBar";
import NetflixMovies from "./NetFlix/NetflixMovies";
import NetflixShows from "./NetFlix/NetflixShows";
import NetflixErrorPage from "./NetFlix/NetflixErrorPage";
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
      <NavBar />
      <Routes>
        <Route path="" element={<NetflixHome />}></Route>
        <Route path="/movies" element={<NetflixMovies />}></Route>
        <Route path="/shows" element={<NetflixShows />}></Route>
        <Route path="/*" element={<NetflixErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
