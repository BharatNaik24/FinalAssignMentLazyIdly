import React, { Component } from "react";
import ListItems from "../ListItems";
import TopPlayerListItems from "../TopPlayerListItems";
import NavBar from "../NavBar";
import AppHeader from "../AppHeader";
import RecentAdded from "../RecentAdded";
import ReactSlick from "../ReactSlick";
import AddPlayerForm from "../AddPlayerForm";
import { RiAddCircleLine } from "react-icons/ri";
import "./index.css";

const initialPlayersList = [
  { serialNo: 1, name: "Arjun Maini", time: "1:22.345" },
  { serialNo: 2, name: "Karthikeyan Narain", time: "1:22.678" },
  { serialNo: 3, name: "Jehan Daruvala", time: "1:23.001" },
  { serialNo: 4, name: "Raghunathan", time: "1:23.345" },
  { serialNo: 5, name: "Sandeep Kumar", time: "1:23.678" },
  { serialNo: 6, name: "Saurav Ghosh", time: "1:24.012" },
  { serialNo: 7, name: "Vikram Singh", time: "1:24.345" },
  { serialNo: 8, name: "Rishi Kumar", time: "1:24.678" },
  { serialNo: 9, name: "Aditya Patel", time: "1:25.012" },
  { serialNo: 10, name: "Deepak Sethi", time: "1:25.345" },
  { serialNo: 11, name: "Rajesh Sharma", time: "1:25.678" },
  { serialNo: 12, name: "Nikhil Gupta", time: "1:26.001" },
  { serialNo: 13, name: "Manoj Reddy", time: "1:26.345" },
  { serialNo: 14, name: "Kunal Mehta", time: "1:26.678" },
  { serialNo: 15, name: "Siddharth Jain", time: "1:27.012" },
  { serialNo: 16, name: "Ankit Yadav", time: "1:27.345" },
  { serialNo: 17, name: "Amit Verma", time: "1:27.678" },
  { serialNo: 18, name: "Pankaj Agarwal", time: "1:28.012" },
  { serialNo: 19, name: "Rohit Kapoor", time: "1:28.345" },
  { serialNo: 20, name: "Gaurav Arora", time: "1:28.678" },
  { serialNo: 21, name: "Vishal Malik", time: "1:29.012" },
  { serialNo: 22, name: "Ajay Bhardwaj", time: "1:29.345" },
  { serialNo: 23, name: "Sunil Agarwal", time: "1:29.678" },
];

class RacingList extends Component {
  state = {
    playersList: initialPlayersList,
    topPlayers: [],
    remainingPlayers: [],
    recentAddedPlayer: null,
    showAddForm: false,
  };

  componentDidMount() {
    this.updateFastestPlayers();
  }

  timeStringToMs = (timeString) => {
    const [minutes, seconds] = timeString.split(":");
    const [sec, ms] = seconds.split(".");
    return parseInt(minutes) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(ms);
  };

  sortPlayers = (playersList) => {
    return playersList.sort(
      (a, b) => this.timeStringToMs(a.time) - this.timeStringToMs(b.time)
    );
  };

  updateFastestPlayers = () => {
    const sortedPlayers = this.sortPlayers([...this.state.playersList]);
    const topPlayers = sortedPlayers.slice(0, 3);
    const remainingPlayers = sortedPlayers.slice(3);

    this.setState({
      topPlayers: topPlayers,
      remainingPlayers: remainingPlayers,
    });
  };

  handleAddPlayer = (newPlayer) => {
    this.setState(
      (prevState) => ({
        playersList: [...prevState.playersList, newPlayer],
        recentAddedPlayer: newPlayer,
        showAddForm: false,
      }),
      this.updateFastestPlayers
    );
  };

  handleShowAddForm = () => {
    this.setState({ showAddForm: true });
  };

  handleCancelAddPlayer = () => {
    this.setState({ showAddForm: false });
  };

  render() {
    const { topPlayers, remainingPlayers, recentAddedPlayer, showAddForm } =
      this.state;

    const backgroundColorContainer = [
      { bgColor: "#FDD017" },
      { bgColor: "#A9ACB6" },
      { bgColor: "#B87333" },
    ];

    const textColor = [
      { textColor: "#FDD017" },
      { textColor: "#A9ACB6" },
      { textColor: "#B87333" },
    ];

    const cashPrize = [
      { prize: "50,000" },
      { prize: "5,000" },
      { prize: "500" },
    ];

    return (
      <div className="raclistMiancont">
        <NavBar />
        <ul className="bgClassContainer">
          <AppHeader />
          {topPlayers.map((player, index) => (
            <li key={player.serialNo}>
              <TopPlayerListItems
                topPlayerDetails={player}
                bgColor={
                  backgroundColorContainer[index]
                    ? backgroundColorContainer[index].bgColor
                    : null
                }
                cashPrize={cashPrize[index] ? cashPrize[index].prize : null}
                textColor={textColor[index] ? textColor[index].textColor : null}
              />
            </li>
          ))}

          {remainingPlayers.length > 0 &&
            remainingPlayers.map((player) => (
              <li key={player.serialNo}>
                <ListItems listDetails={player} />
              </li>
            ))}
        </ul>

        {recentAddedPlayer && <RecentAdded recentPlayer={recentAddedPlayer} />}

        {showAddForm ? (
          <AddPlayerForm
            remainingPlayers={remainingPlayers}
            onAddPlayer={this.handleAddPlayer}
            onCancel={this.handleCancelAddPlayer}
          />
        ) : (
          <div className="buttonContainer">
            <button className="AddButton" onClick={this.handleShowAddForm}>
              <RiAddCircleLine size={35} />
              Add New Player
            </button>
          </div>
        )}

        <ReactSlick />

        <div className="footer">
          <div className="footer-text">
            <p className="footer-para">
              Get your name on the leaderboard to win exciting prizes!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RacingList;
