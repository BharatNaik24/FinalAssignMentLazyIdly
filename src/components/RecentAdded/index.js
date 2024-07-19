import "./index.css";

const RecentAdded = (props) => {
  const { recentPlayer } = props;
  return (
    <div className="recentAddedContainer">
      {recentPlayer ? (
        <div>
          <h1>Recent Entry</h1>
          <div className="ListItems">
            <div className="serialContainer">
              <h1 className="headingElement">{recentPlayer.serialNo}</h1>
              <h1>{recentPlayer.name}</h1>
            </div>
            <h1>{recentPlayer.time}</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RecentAdded;
