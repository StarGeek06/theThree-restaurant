import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Reservation from "./Reservation";
import Employees from "./Employees";

function App() {

  return (

    <>
    
    <div>
           <nav>
              <div className="logo">

              </div>

              <div className="links"></div>
           </nav>
    </div>
    
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/sign" element={<SignUp />}></Route>
          <Route path="/log" element={<Login />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
