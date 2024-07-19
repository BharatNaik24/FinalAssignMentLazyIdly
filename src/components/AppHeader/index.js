import "./index.css";

const AppHeader = () => (
  <div className="leaderHeadContainer">
    <div className="hrContainer">
      <hr
        className="hrStyle hrOrange"
        style={{ width: "90%", marginBottom: "2%", marginTop: "3%" }}
      />
      <hr
        className="hrStyle hrOrange"
        style={{ width: "80%", marginBottom: "2%" }}
      />
      <hr
        className="hrStyle hrOrange"
        style={{ width: "70%", marginBottom: "2%" }}
      />
    </div>
    <div>
      <h1 className="LeaderHeading">LEADERBOARD</h1>
    </div>
    <div className="hrContainer">
      <hr
        className="hrStyle2 hrBlue"
        style={{
          width: "74%",
          marginTop: "3%",
          marginBottom: "2%",
          marginLeft: "25%",
        }}
      />
      <hr
        className="hrStyle2 hrBlue"
        style={{ width: "84%", marginBottom: "2%", marginLeft: "15%" }}
      />
      <hr
        className="hrStyle2 hrBlue"
        style={{ width: "94%", marginBottom: "2%", marginLeft: "5%" }}
      />
    </div>
  </div>
);

export default AppHeader;
