const FrontPage = ({ changeBox }) => {
  return (
    <div className="c1-box">
      <div className="box1">
        <img src="Images\logo.png" alt="" />
      </div>
      <div className="box2">
        <h2>DICE GAME</h2>
        <button onClick={changeBox}>Play Now</button>
      </div>
    </div>
  );
};

export default FrontPage;
