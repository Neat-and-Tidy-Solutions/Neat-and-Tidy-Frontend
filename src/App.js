import "./App.css";
import Heading from "./Components/jsx/Body.jsx/Heading";
import Header from "./Components/jsx/Headers.jsx/Header";
import Login from "./Components/jsx/Headers.jsx/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Secondbody from "./Components/jsx/Headers.jsx/Secondbody";
import CarouselComponent from "./Components/jsx/Headers.jsx/CarouselComponent";
import SignUpComponent from "./Components/jsx/Headers.jsx/SignUpComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path=  "signup" element={<SignUpComponent />} />
          {/* <Route exact path="/" element={<Heading />} /> */}

          <Route exact path="/header" element={<Header/>}/>
          <Route exact path="/heading" element={<Heading />} />
          <Route path="/login" element={<Login />} />
          <Route path ="/secondbody" element= {<Secondbody/>}/>
          <Route path ="/carouselcomponent" element={<CarouselComponent/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
