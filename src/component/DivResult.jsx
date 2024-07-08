// import Button from "./Button";

const DivResult = ({ initialvalue, finalvalue, setScore, InitialError }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <p className="Errorthrow">{InitialError}</p>
      <div className="div2">
        <div className="totalvalue">
          <p className="p1">{setScore}</p>
          <p className="p2">Total Score</p>
        </div>
        <div className="numberboxholder">
          <div className="numbersbox">
            {arr.map((item, index) => (
              <button
                className="numberboxes1"
                key={index}
                onClick={() => finalvalue(item)}
                style={{
                  background: item === initialvalue ? "black" : "white",
                  color: item === initialvalue ? "white" : "black",
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="selectnum">Select Number</p>
        </div>
      </div>
    </>
  );
};

export default DivResult;
