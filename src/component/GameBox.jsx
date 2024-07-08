import { useState } from "react";
import DivImage from "./DivImage";
import DivResult from "./DivResult";
import DivRules from "./DivRules";
const GameBox = () => {
  const [hidden, visiblee] = useState(false);
  const [initialvalue, changeValue] = useState(false);
  const onShow = () => {
    visiblee(!hidden);
  };
  const changevalue = () => {
    changeValue(0);
  };

  const [InitialImg, ChangeImg] = useState(1);
  // this is for DivResult
  const [initialColor, SetColor] = useState();
  //
  const [InitialScore, SetScore] = useState(0);

  // To Create an error if no is not selected:
  const [InitialError, SetError] = useState("");
  const GenerateRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };
  const DiceChange = () => {
    // it is to prevent the data;
    if (!initialColor) {
      SetError("You have not selected any number");
      return;
    }
    SetError("");
    const RandomNumber = GenerateRandomNumber();
    ChangeImg(() => RandomNumber);

    //

    //
    if (initialColor === RandomNumber) {
      SetScore((aa) => aa + RandomNumber);
    } else {
      SetScore((aa) => aa - 2);
    }
    SetColor(undefined);
  };

  // only for DivResult
  // this is only fro DivREsult

  //

  return (
    <>
      <div className="game-container">
        {/* <div className="div1">You have not selected any number</div> */}

        <DivResult
          initialvalue={initialColor}
          finalvalue={SetColor}
          setScore={InitialScore}
          InitialError={InitialError}
        />
        <DivImage
          ShowRules={onShow}
          InitialImg={InitialImg}
          DiceChange={DiceChange}
          SetScore={SetScore}
        />
        {hidden && <DivRules />}
      </div>
    </>
  );
};

export default GameBox;
