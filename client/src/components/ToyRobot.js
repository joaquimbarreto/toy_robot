import React, { useState } from "react";
import StartPosition from "./StartPosition";
import "../App.css";

const ToyRobot = () => {
  const [compass, setCompass] = useState("North");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [reset, setReset] = useState(false);

  const turnLeft = () => {
    switch (compass) {
      case "North":
        setCompass("West");
        break;
      case "West":
        setCompass("South");
        break;
      case "South":
        setCompass("East");
        break;
      case "East":
        setCompass("North");
        break;
      default:
        return null;
    }
  };
  const turnRight = () => {
    switch (compass) {
      case "North":
        setCompass("East");
        break;
      case "East":
        setCompass("South");
        break;
      case "South":
        setCompass("West");
        break;
      case "West":
        setCompass("North");
        break;
      default:
        return null;
    }
  };

  const move = () => {
    if (y < 4 && compass === "North") {
      setY(y + 1);
    } else if (y > 0 && compass === "South") {
      setY(y - 1);
    } else if (x < 4 && compass === "East") {
      setX(x + 1);
    } else if (x > 0 && compass === "West") {
      setX(x - 1);
    }
    return null;
  };

  const resetPosition = () => {
    setCompass("North");
    setY(0);
    setX(0);
    setReset(true);
  };

  const handleSelectX = value => {
    setX(value);
  };

  const handleSelectY = value => {
    setY(value);
  };
  const handleSelectCompass = value => {
    setCompass(value);
  };

  const resetFalse = set => {
    setReset(set);
  };

  return (
    <div>
      <header>Toy Robot</header>
      <StartPosition
        x={handleSelectX}
        y={handleSelectY}
        compass={handleSelectCompass}
        reset={reset}
        resetFalse={resetFalse}
      />
      <p>Click on the buttons below to navigate toy robot:</p>
      <button className="button" onClick={() => turnLeft()}>
        Left
      </button>
      <button className="button" onClick={() => turnRight()}>
        Right
      </button>
      <button className="button" onClick={() => move()}>
        Move
      </button>
      <p>
        <span>
          Report: {x}, {y}, {compass}
        </span>
      </p>
      <button className="button" onClick={() => resetPosition()}>
        Reset
      </button>
    </div>
  );
};

export default ToyRobot;
