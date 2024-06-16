import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/signup";

const App= ()=> {

  return (
      <div className="App">

        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}
export default App;