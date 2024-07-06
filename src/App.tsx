import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Secondpage from "./Components/Secondpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/secondpage" element={<Secondpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
