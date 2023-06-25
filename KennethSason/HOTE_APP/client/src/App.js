import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Register from "./screens/Register";
import Loginscreen from "./screens/Loginscreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" exact component={Homescreen} /> */}
          <Route path="/home" element={<Homescreen />} />
          <Route
            path="/book/:roomid/:fromDate/:toDate"
            element={<Bookingscreen />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
