import { Button, TextField, Typography } from "@mui/material";
import { color, style } from "@mui/system";
import React, { useState, useEffect } from "react";
import "../index.css";
import { ClassNames } from "@emotion/react";

const AutoSuggestions = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentLetter, setCurrentLetter] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [expression, setExpression] = useState("");
  const [recieved, setrecieved] = useState(false);

  const allSuggestions = [
    "impulse",
    "delta",
    "sin",
    "cos",
    "sinc",
    "rect",
    "gate",
    "ramp",
    "step",
    "exp",
    "e",
    "sgn",
    "pow",
    "pi",
    "abs",
    "periodic",
    "sum",
    "product",
  ];
  const handleInputChange = (e) => {
    const value = e.target.value;
    setExpression(value);
    setInputValue(value);

    // Extract the last word from the input value
    const words = value.split(" ");
    const lastWord = words[words.length - 1];

    setCurrentWord(lastWord);

    // Filter suggestions based on the last word
    const filteredSuggestions = allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(lastWord.toLowerCase())
    );

    // console.log(filteredSuggestions);
    setSuggestions(filteredSuggestions);
  };

  console.log(suggestions);

  const handleSuggestionClick = (suggestion, clear = false) => {
    if (clear) {
      setInputValue((prevValue) => {
        if (suggestion === "impulse" || suggestion === "delta") {
          const words = prevValue.split(" ");
          words[words.length - 1] = "\u03b4(t) ";
          return words.join(" ");
        }

        if (suggestion === "step") {
          const words = prevValue.split(" ");
          words[words.length - 1] = "u(t) ";
          return words.join(" ");
        }
        if (suggestion === "sum") {
          const words = prevValue.split(" ");
          words[words.length - 1] = "\u03a3((i, 0, n), expression) ";
          return words.join(" ");
        }

        if (suggestion === "product") {
          const words = prevValue.split(" ");
          words[words.length - 1] = "\u220F((i, 0, n), expression) ";
          return words.join(" ");
        }

        if (suggestion === "rect" || suggestion === "gate") {
          const words = prevValue.split(" ");
          words[words.length - 1] = "\u03C0(t) ";
          return words.join(" ");
        }

        const words = prevValue.split(" ");
        words[words.length - 1] = suggestion + "(t) ";
        return words.join(" ");
      });
      setSuggestions([]);
    }
    // else{
    //     setInputValue((prevValue) => {
    //         if(suggestion==='impulse' || suggestion==="delta"){
    //             const words = prevValue.split(' ');
    //             words.pop()
    //             words[words.length - 1] = suggestion;
    //             return words.join(' ');
    //         }

    //         if(suggestion==='step'){
    //             return "u(t) ";
    //         }

    //         if(suggestion==='rect'|| suggestion==="gate"){
    //             return '\u03C0(t) ';
    //         }
    //         return suggestion;
    //     });
    // }
  };

  const handleKeyDown = (e) => {
    console.log(e.key);

    if (highlightedIndex < suggestions.length) {
      if (e.key === "ArrowUp" && highlightedIndex > 0) {
        setHighlightedIndex((prevIndex) => prevIndex - 1);
        // e.preventDefault();

        //console.log("Down Press")
        // setHighlightedIndex((prevIndex) =>
        //   prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
        // );

        // console.log(highlightedIndex + suggestions[highlightedIndex]);
        // handleSuggestionClick(suggestions[highlightedIndex]);
      } else if (
        e.key === "ArrowDown" &&
        highlightedIndex < suggestions.length - 1
      ) {
        setHighlightedIndex((prevIndex) => prevIndex + 1);

        // e.preventDefault();
        // //console.log("up  Press")
        // setHighlightedIndex((prevIndex) =>
        // prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
        // );
        // console.log(highlightedIndex + suggestions[highlightedIndex]);
        // handleSuggestionClick(suggestions[highlightedIndex]);
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        handleSuggestionClick(suggestions[highlightedIndex], true);
        //suggestions[highlightedIndex];
        // if (highlightedIndex !== -1) {
        //   console.log(highlightedIndex + suggestions[highlightedIndex])  ;
        //   handleSuggestionClick(suggestions[highlightedIndex], true);
        // }
      }
    } else {
      setHighlightedIndex(-1);
    }
  };

  // useEffect(() => {
  //   const handleArrowNavigation = (event) => {
  //     handleKeyDown(event);
  //   };

  //   window.addEventListener("keydown", handleArrowNavigation);

  //   return () => {
  //     window.removeEventListener("keydown", handleArrowNavigation);
  //   };
  // }, [highlightedIndex]);

  return (
    <div>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter an expression..."
        style={{
          boxShadow: "0px 2px 5px black",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          width: 930,
          color: "black",
          fontFamily: "Kaushan Script",
          transform: "translate(25px, -10px)",
        }}
      >
        <Typography style={{ fontFamily: "Poppins" }}></Typography>
      </TextField>
      <Button
        onClick={() => {
          // {ClassNames.drawOutput}

          var str = inputValue;

          for (let i = 0; i < str.length; i++) {
            if (str[i] === "\u03b4") {
              str = str.slice(0, i) + "impulse" + str.slice(i + 1, str.length);
            } else if (str[i] === "u" && str[i + 1] === "(") {
              str = str.slice(0, i) + "step" + str.slice(i + 1, str.length);
            } else if (str[i] === "\u03a3") {
              str = str.slice(0, i) + "sum" + str.slice(i + 1, str.length);
            } else if (str[i] === "\u03C0") {
              str = str.slice(0, i) + "rect" + str.slice(i + 1, str.length);
            } else if (str[i] === "\u220f") {
              str = str.slice(0, i) + "product" + str.slice(i + 1, str.length);
            }
          }
          fetch("https://wave-sim-backend2.vercel.app/?expr=" +encodeURIComponent(str) , {
            mode:  "no-cors",
            headers: {
              
              "Content-Type": "application/json",
            }
          }).then(async (data) => {
            var txt = await data.text();
            console.log("Hi " + txt);
            setrecieved(true);
          });
        }}
        style={{
          width: "80px",
          height: "55px",
          backgroundColor: "rgba(20, 30, 35, 1)",
          transform: "translate(35px,-10px)",
          fontFamily: "Poppins",
          fontSize: "20px",
          boxShadow: "0px 3px 12px black",
          color: "white",
        }}
      >
        Send
      </Button>

      <div>
        {suggestions.length > 0 && (
          <ul>
            <div
              className="all-list"
              style={{
                width: 930,
                transform: "translate(-35px,-20px)",
                overflowY: "scroll",
                visibility: false,
                backgroundColor: "rgba(20, 47, 53, 0.4)",
                boxShadow: "0px 3px 25px rgba(0, 0, 0, 1)",
                height: "200px",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              {suggestions.map((suggestion, index) => (
                <h4
                  align="left"
                  // style={{color:"white",border:""}}

                  key={index}
                  style={{
                    color: "white",
                    width: 870,
                    transform: "translate(-3px,0)",
                    backgroundColor: "",
                  }}
                  onClick={() => handleSuggestionClick(suggestion, true)}
                  className={
                    index === highlightedIndex
                      ? "suggestion-list active"
                      : "suggestion-list"
                  }
                >
                  {" "}
                  <div>{suggestion}</div>
                </h4>
              ))}
            </div>
          </ul>
        )}
      </div>

      <div style={{ transform: "translate(0,60px)" }}>
        {suggestions.length == 0 && (
          <div>
            <div>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  color: "white",
                  transform: "translate(-400px, 0px)",
                }}
              >
                Bounds :
              </Typography>
            </div>
            <div
              style={{
                transform: "translate(-100px, -50px)",
              }}
            >
              <TextField
                defaultValue="-inf"
                style={{
                  transform: "translate(-150px,0)",
                  fontSize: "30px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  boxShadow: "0px 2px 5px black",
                  width: 100,
                  fontFamily: "Poppins",
                }}
              ></TextField>
            </div>
            <div
              style={
                {
                  // transform: "translate(-250px, 0px)",
                }
              }
            >
              <TextField
                defaultValue="inf"
                style={{
                  transform: "translate(-100px,-106px)",
                  fontSize: "30px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  width: 100,
                  fontFamily: "Poppins",
                  boxShadow: "0px 2px 5px black",
                }}
              ></TextField>
            </div>
          </div>
        )}
        {recieved && (
          <div>
            <Button
              onClick={() => {
                setrecieved(false);
              }}
              style={{
                // width:"80px",
                height: "55px",
                backgroundColor: "rgba(20, 30, 35, 1)",
                transform: "translate(35px,-10px)",
                fontFamily: "Poppins",
                fontSize: "20px",
                boxShadow: "0px 3px 12px black",
                color: "white",
              }}
            >
              Show Plots
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoSuggestions;
