import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const cars = [
    "./assets/bmw.jpg",
    "./assets/porsche.jpg",
    "./assets/ry.jpg",
    "./assets/mustang.jpg",
  ];

  // for(let i = 0; i<cars.length; i++)
  // console.log(img);

  return (
    <div>
      {/* <h1>{counter}</h1> */}
      <img
        className="img"
        src={cars[counter]}
        alt="cars-model"
        width={600}
        height={300}
      />
      <div className="btn-wrapper">
        <button
          className="back"
          onClick={() => counter > 0 && setCounter(counter - 1)}
        >
          Back
        </button>
        <button
          className="next"
          onClick={() => counter < cars.length - 1 && setCounter(counter + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
