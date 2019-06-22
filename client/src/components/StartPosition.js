import React, { useState, useEffect } from "react";
import "../App.css";

const StartPosition = props => {
  const [startCompass, setStartCompass] = useState("North");
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleSelectX = event => {
    const targetValueX = parseInt(event.target.value);
    props.x(targetValueX);
    setStartX(targetValueX);
  };

  const handleSelectY = event => {
    const targetValueY = parseInt(event.target.value);
    props.y(targetValueY);
    setStartY(targetValueY);
  };

  const handleSelectCompass = event => {
    const targetValueCompass = event.target.value;
    props.compass(targetValueCompass);
    setStartCompass(targetValueCompass);
  };

  useEffect(() => {
    console.log("props.reset");
    const resetStartPositions = () => {
      setStartX(0);
      setStartY(0);
      setStartCompass("North");
    };
    resetStartPositions();
  }, [props.reset]);

  useEffect(() => {
    console.log("props");
    return () => {
      props.resetFalse(false);
    };
  }, [props]);

  return (
    <div className="input">
      <form>
        <label>
          Select starting position:
          <select
            id="x-cord"
            className="cord"
            value={startX}
            onChange={handleSelectX}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select
            id="y-cord"
            value={startY}
            className="cord"
            onChange={handleSelectY}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select
            id="compass"
            value={startCompass}
            className="cord"
            onChange={handleSelectCompass}
          >
            <option>North</option>
            <option>East</option>
            <option>South</option>
            <option>West</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default StartPosition;
