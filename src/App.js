import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Home } from "./Pages/Home";
import { FetchData } from "./components/FetchData";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/general" element={<FetchData cat="general"/>} />
        <Route  path="/business" element={<FetchData cat="business"/>} />
        <Route  path="/entertainment" element={<FetchData cat="entertainment"/>} />
        <Route  path="/health" element={<FetchData cat="health"/>} />
        <Route  path="/science" element={<FetchData cat="science"/>} />
        <Route exact path="/sports" element={<FetchData cat="sports"/>} />
        <Route exact path="/technology" element={<FetchData cat="technology"/>} />
        
  
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  
      
    </>
  );
}

export default App;
