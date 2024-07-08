const DivImage = ({ InitialImg, DiceChange, ShowRules, SetScore }) => {
  //   console.log(Math.floor(Math.random() * 6 + 1));
  return (
    <div className="div3">
      <div className="Diceshow" onClick={DiceChange}>
        <img src={`/Images/dice_${InitialImg}.png`} alt="" />
      </div>
      <p className="dicepara">Click to Dice to roll</p>
      <div className="Dicerr">
        <div
          className="resetbtn"
          onClick={() => {
            SetScore(0);
          }}
        >
          Reset Score
        </div>
        <div className="resetbtn showrulebtn" onClick={ShowRules}>
          Show Rules
        </div>
      </div>
    </div>
  );
};

export default DivImage;
