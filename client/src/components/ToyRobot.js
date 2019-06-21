import React, { useState } from "react";
import "../App.css";

const ToyRobot = () => {
  const [compass, setCompass] = useState("North");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

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

  const reset = () => {
    setCompass("North");
    setY(0);
    setX(0);
  };

  return (
    <div className="toy-robot">
      <p>Please click on the buttons below:</p>
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
      <button className="button" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default ToyRobot;
