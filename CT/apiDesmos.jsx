import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, TextField, Button, Grid } from '@mui/material';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
  const [xValues, setXValues] = useState('');
  const [yValues, setYValues] = useState('');
  const [xRange, setXRange] = useState('');
  const [yRange, setYRange] = useState('');
  const [chartData, setChartData] = useState(null);

  const parseInputToArray = (input) => {
    return input.split(',').map(value => parseFloat(value.trim()));
  };

  const handleGenerateGraph = () => {
    const xArray = parseInputToArray(xValues);
    const yArray = parseInputToArray(yValues);

    if (xArray.length !== yArray.length) {
      alert('Please make sure both arrays have the same length.');
      return;
    }

    const [xMin, xMax] = parseInputToArray(xRange);
    const [yMin, yMax] = parseInputToArray(yRange);

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
          min: xMin || Math.min(...xArray, 0),
          max: xMax || Math.max(...xArray, 0),
          title: {
            display: true,
            text: 'X',
            color: '#333',
            font: { weight: 'bold', size: 16 },
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
          min: yMin || Math.min(...yArray, 0),
          max: yMax || Math.max(...yArray, 0),
          title: {
            display: true,
            text: 'Y',
            color: '#333',
            font: { weight: 'bold', size: 16 },
          },
          ticks: {
            color: '#333',
          },
          grid: {
            color: '#ddd',
          },
        },
      },
      plugins: {
        tooltip: {
          enabled: true,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy',
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
      cubicInterpolationMode: 'monotone',
    };

    setChartData({ data, options });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', background: '#f1f1f1', padding: '20px' }}>
      <Card style={{ width: '80%', backgroundColor: '#ffffff', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="X Values"
              variant="outlined"
              fullWidth
              value={xValues}
              onChange={(e) => setXValues(e.target.value)}
              placeholder="e.g., 1, 2, 3"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Y Values"
              variant="outlined"
              fullWidth
              value={yValues}
              onChange={(e) => setYValues(e.target.value)}
              placeholder="e.g., 2, 4, 6"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="X Axis Range (min, max)"
              variant="outlined"
              fullWidth
              value={xRange}
              onChange={(e) => setXRange(e.target.value)}
              placeholder="e.g., 0, 10"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Y Axis Range (min, max)"
              variant="outlined"
              fullWidth
              value={yRange}
              onChange={(e) => setYRange(e.target.value)}
              placeholder="e.g., 0, 20"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleGenerateGraph} style={{ marginTop: '20px', fontSize: '16px' }}>
          Generate Graph
        </Button>
      </Card>
      <div style={{ marginTop: '20px', width: '80%', background: '#ffffff', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {chartData && <Line data={chartData.data} options={chartData.options} />}
      </div>
    </div>
  );
};

export default LineGraph;
