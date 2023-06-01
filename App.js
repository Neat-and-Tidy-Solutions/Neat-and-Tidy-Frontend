import "./App.css";
import Heading from "./component/jsx/Body.jsx/Heading";
import Header from "./component/jsx/Headers.jsx/Header";
import Login from "./component/jsx/Body.jsx/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secondbody from "./component/jsx/Secondbody";
function App() {
  return (
    <div className="App">
      <Heading />
      {/**<Header />**/}
      <Secondbody />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Heading} />
          <Route path="/login" component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
