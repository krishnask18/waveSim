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

function HomeCards() {
  return (
    <div style={{transform:"translate(0px, 80px)"}}>
      
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {/* CONT */}
        <div  className="card-hover"
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            width="300px" 
            bgim="linear-gradient(to bottom,rgba(79, 112, 65, 1), rgba(55, 78, 49, 0.5)),url(./src/assets/CT_bgi.jpg)"
            title="Continuous Time Signals"
            cursor="pointer"
            line="visible"
            shadow="0px 3px 12px black"
            description={
              <div style={{width:"270px"}}>
                <div>
                  {"\u25CF"} Tools for computation and visualisation of vaious
                  domain transformations for continuous time signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Animations of convolution custom signals
                </div>
              </div>
            }
            />
        </div>
            {/* DIGITAL */}
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            width="300px"
            bgim="linear-gradient(to bottom,rgba(15, 126, 94, 1), rgba(10, 115, 86, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            cursor="pointer"
            line="visible"
            shadow="0px 3px 12px black"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
          {/* SYSTEM */}
        <div className="card-hover"
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            width="300px"
            bgim="linear-gradient(to bottom,rgba(150, 120, 15, 1), rgba(110, 90, 10, 0.5)),url(../src/assets/Sys_bgi.jpg)"
            title="System Analysis"
            cursor="pointer"
            line="visible"
            shadow="0px 3px 12px black"
            description={
              <div style={{width:"270px"}}>
                <div>
                  {"\u25CF"} Design of system using TF, laplace variable, its analysis with s and {"\u03C9"} domain.
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Visualisation of response for custom input signal for a system
                </div>
                <div style={{transform:"translate(0px, 25px)"}}>
                  {"\u25CF"} Analysis of system with Root Locus, Routh-Hurtwiz criterion.
                </div>
              </div>
            }
          />
        </div>
          {/* Digital CKT */}
        <div className="card-hover"
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            width="300px"
            bgim="linear-gradient(to bottom,rgba(136, 7, 38, 1), rgba(66, 7, 16, 0.5)),url(../src/assets/DC_bgi.jpg)"
            title="Digital Circuits Simulation"
            cursor="pointer"
            line="visible"
            shadow="0px 3px 12px black"
            description={
              <div style={{width:"270px"}}>
                <div>
                  {"\u25CF"} Design of system using TF, laplace variable, its analysis with s and {"\u03C9"} domain.
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Visualisation of response for custom input signal for a system
                </div>
                <div style={{transform:"translate(0px, 25px)"}}>
                  {"\u25CF"} Analysis of system with Root Locus, Routh-Hurtwiz criterion.
                </div>
              </div>
            }
          />
        </div>
        <div><Cardcomp
          width="300px" line="none"></Cardcomp></div>
        <div><Cardcomp
          width="300px" line="none"></Cardcomp></div>
      </div>
    </div>
  );
}
export default HomeCards;
