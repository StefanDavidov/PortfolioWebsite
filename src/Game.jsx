import worldMap from "../src/images/worldMap.png";
import usaMap from "../src/images/united-states-map-with-state-names.png";
import GeorgiaMap from "../src/images/GeorgiaMap.png";
import congrats from "../src/images/congrats.png";
import { useState } from "react";
import { mousePosition } from "./mousePosition";
import { useCallback } from "react";
export default function Game() {
  const [stage, setStage] = useState(0);
  const [message, setMessage] = useState(0);
  const position = mousePosition();

  let messageArray = [
    "Click a location to Guess",
    "Wrong location try again",
    "Correct!",
  ];

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="center gameDiv">
      {stage === 0 && (
        <>
          <h1>Click the button below to start the Game!</h1>
          <button
            className="startButton"
            onClick={() => {
              return setStage(1);
            }}
          >
            Start!
          </button>
        </>
      )}
      {stage === 1 && (
        <>
          <h1>Instructions</h1>
          <p>
            This is the location guessing game once you click continue you will
            be shown a map of the world. Your job is to click on where you
            believe I am from. Once you click the correct location you will zoom
            in further and repeat the proccess until you figure out my true
            location.
          </p>
          <h3>Good Luck!!</h3>
          <button
            className="startButton"
            onClick={() => {
              return setStage(2);
            }}
          >
            Continue
          </button>
        </>
      )}

      {stage === 2 && (
        <>
          {lockScroll()}
          {position.x}: {position.y} {stage} {messageArray[message]}
          <img
            src={worldMap}
            className="Map"
            onClick={() => {
              if (checkLocation(position, stage)) {
                setStage(3);
                setMessage(2);
              } else {
                setMessage(1);
              }
            }}
          />
        </>
      )}

      {stage === 3 && (
        <>
          {position.x}: {position.y} : {messageArray[message]}
          <img
            src={usaMap}
            className="Map"
            onClick={() => {
              if (checkLocation(position, stage)) {
                setStage(4);
                setMessage(2);
              } else {
                setMessage(1);
              }
            }}
          />
        </>
      )}
      {stage === 4 && (
        <>
          {position.x}: {position.y} : {messageArray[message]}
          <img
            src={GeorgiaMap}
            className="Map"
            onClick={() => {
              if (checkLocation(position, stage)) {
                setStage(5);
                setMessage(2);
              } else {
                setMessage(1);
              }
            }}
          />
        </>
      )}
      {stage === 5 && (
        <>
        <h1>
          Congratulations You Have Guessed My Location Correctly!
        </h1>
        <img src={congrats} style={{height:'40vh', width:"auto"}}/>
        </>
      )}
    </div>
  );
}
function checkLocation(position, stage) {
  switch (stage) {
    case 2:
      if (
        position.x > 465 &&
        position.x < 675 &&
        position.y > 455 &&
        position.y < 555
      ) {
        return true;
      }
      return false;
    case 3:
      if (
        position.x > 1190 &&
        position.x < 1300 &&
        position.y > 640 &&
        position.y < 750
      ) {
        return true;
      }
      return false;
    case 4:
      if (
        position.x > 820 &&
        position.x < 875 &&
        position.y > 285 &&
        position.y < 340
      ) {
        return true;
      }
      return false;
  }
}

/*
 
*/
