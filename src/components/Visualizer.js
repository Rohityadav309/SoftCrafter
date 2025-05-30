// src/components/Visualizer.js
import React, { useState, useEffect } from 'react';
import './Visualizer.css';

const Visualizer = ({ algorithm, speed, size, color }) => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  // useEffect(() => {
  //   generateArray();
  // }, [size]);

  const generateArray = () => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() *100) + 10);
    }
    setArray(arr);
  };

  const animateSorting = (steps) => {
    setIsSorting(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        setArray([...steps[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsSorting(false);
      }
    },2000-speed);
  };

  const bubbleSort = () => {
    const arr = [...array];
    const steps = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        steps.push([...arr]);
      }
    }
    animateSorting(steps);
  };

  const selectionSort = () => {
    const arr = [...array];
    const steps = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push([...arr]);
    }
    animateSorting(steps);
  };

  const insertionSort = () => {
    const arr = [...array];
    const steps = [];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      steps.push([...arr]);
    }
    animateSorting(steps);
  };




  
  const handleSort = () => {
    if (algorithm === 'Bubble Sort') {
      bubbleSort();
    } else if (algorithm === 'Selection Sort') {
      selectionSort();
    } else if (algorithm === 'Insertion Sort') {
      insertionSort();
    }
  };

  return (
    <div>
      <div>
        <button onClick={generateArray }>Generate Array</button>
      </div>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value * 3}px`,
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      <button onClick={handleSort} disabled={isSorting}>
        Start {algorithm}
      </button>
    </div>
  );
};

export default Visualizer;
