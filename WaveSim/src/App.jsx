import React from "react";
import styled from "styled-components";
import Cardcomp from "./Cardcomp";
import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import "./index.css";
import { Box, Typography } from "@mui/material";
import MyComponent from "./Muiresponsive";
import CombinedAll from "./HomeCards";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContinuousTime from "./CT/ContinuousTime";
import FourierTransform from "./CT/Ctft";
import HomeCards from "./HomeCards";
import LineGraph from "./CT/graph";



function App() {
  const [count, setCount] = useState(0);

  return (
      
        <Router >
            <ButtonAppBar/>
            <Routes>
              <Route path="/combinedAll" element={<HomeCards/>}/>
              <Route path="/continuousTime" element={<ContinuousTime/>}/>
              <Route path="/continuousTime/Ctft" element={<FourierTransform/>}/>
              <Route path="/continuousTime/Ctft/Graph" element ={<LineGraph/>}/>
            </Routes>
        </Router>
        
    
          
  );
}

export default App;
