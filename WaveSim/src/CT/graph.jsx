// Import necessary dependencies
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title,Tooltip, Legend, GridLines } from 'chart.js';
import { Card } from '@mui/material';

// Register the necessary scales
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title,Tooltip, Legend, GridLines );


// Define the LineGraph component
const LineGraph = () => {
  // State for user inputs
  const [xValues, setXValues] = useState('');
  const [yValues, setYValues] = useState('');

  // State for chart data
  const [chartData, setChartData] = useState(null);

  // Helper function to parse input string to array
  const parseInputToArray = (input) => {
    return input.split(',').map(value => parseFloat(value.trim()));
  };

  // Handler for generating the graph
  const handleGenerateGraph = () => {
    // Parse user inputs to arrays
    const xArray = parseInputToArray(xValues);
    const yArray = parseInputToArray(yValues);

    // Validate input lengths
    if (xArray.length !== yArray.length) {
      alert('Please make sure both arrays have the same length.');
      return;
    }

    // Create chart data
    const data = {
      labels: xArray.map(String),
      datasets: [
        {
          label: 'Line Graph',
          data: yArray,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(75,192,192,1)',
          pointRadius: 4,
        },
      ],
    };
    const options = {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            min: Math.min(...xArray,0),  // Set the minimum value for the x-axis
            max: Math.max(...xArray,0),
            title: {
                display: true,
                text: 'X Axis',
                
                color: '#333',
              },
              ticks: {
                color: '#333',
              },
              grid: {
                color: '#ddd',
              },
            
          },
          y: {
            type: 'linear',
            position: 'left',
            //min: 0,  // Set the minimum value for the y-axis
            title: {
                display: true,
                text: 'Y Axis',
                color: '#333',
              },
              ticks: {
                color: '#333',
              },
              grid: {
                color: '#ddd',
              },
            min: Math.min(...yArray,0),  // Set the minimum value for the y-axis
            max: Math.max(...yArray,0)
          },
        },
      };
        plugins: {
            tooltip: {
            enabled: true,
            },
            legend: {
            display: true,
            position: 'bottom',
            },
        },
        };
        

    // Set the chart data
    setChartData({data,options});
  };

  return (
    <div style={{transform:'translate(0px,100px)'}}>
        <Card style = {{width:400,backgroundColor:"#004d4d",padding:20,transform:"translate(400px,0px)"}}>
      <div >
        <label style={{fontSize:18,color:" #e6ffff"}}>X Values (comma-separated): </label>
        <input
          type="text"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
          placeholder="e.g., 1, 2, 3"
        />
      </div><br/>
      <div>
        <label style={{fontSize:18,color:" #e6ffff"}}>Y Values (comma-separated): </label>
        <input
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="e.g., 2, 4, 6"
        />
      </div><br/>
      <button onClick={handleGenerateGraph} style={{fontSize:18}}>Generate Graph</button></Card>
      <div style={{ marginTop: '20px' }}>
        {chartData && <Line data={chartData.data}  options={chartData.options}/>}
      </div>
    </div>
  );
};

export default LineGraph;
