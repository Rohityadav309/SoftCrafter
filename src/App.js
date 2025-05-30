
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Visualizer from './components/Visualizer';

function App() {
  const [algorithm, setAlgorithm] = useState('Selection Sort');
  const [speed, setSpeed] = useState(1000);
  const [size, setSize] = useState(30);
  const [color, setColor] = useState('#4caf50');
  const [array, setArray] = useState([]);

  // Function to generate a new random array

  // const generateArray = () => {
  //   const arr = [];
  //   for (let i = 0; i < size; i++) {
  //     arr.push(Math.floor(Math.random() *100) +10);  // Random number between 1 and 100
  //   }
  //   setArray(arr);  // Update state
  // };
 
  // Initialize the array when the component mounts
  // useEffect(() => {
  //   generateArray();  // Generate initial array when the app starts
  // }, [size]);  // Regenerate array if the size changes

  return (
    <div className="App">
      <h1>SortCrafters</h1>
      <p>Visualize Sorting Algorithms</p>
      {/* <button onClick={generateArray}>Generate New Array</button> */}
      
      <div className="controls">
        <label>
          Select Algorithm:
          <select onChange={(e) => setAlgorithm(e.target.value)} value={algorithm}>
            <option>Bubble Sort</option>
            <option>Selection Sort</option>
            <option>Insertion Sort</option>
          </select>
        </label>

        <label>
          Speed:
          <input
              className="speed"
            type="range"
            min="50"
            max="2000"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>

        <label>
          Array Size:
          <input
            type="number"
            min="2"
            max="57"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>

        <label>
          Bar Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      
      <div className="visualizer-container">
        <Visualizer 
          algorithm={algorithm} 
          speed={speed} 
          size={size} 
          color={color} 
          // array={array} 
        />
      </div>
    </div>
  );
}

export default App;
