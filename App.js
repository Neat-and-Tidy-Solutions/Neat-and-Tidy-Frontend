import "./App.css";
import Heading from "./component/jsx/Body.jsx/Heading";
import Header from "./component/jsx/Headers.jsx/Header";
import Thirdbody from "./component/jsx/Headers.jsx/Thirdbody";
import Secondbody from "./component/jsx/Secondbody";
function App() {
  return (
    <div className="App">
      <Heading />
      {/**<Header />**/}
      <Secondbody />
      <Thirdbody />
    </div>
  );
}

export default App;
