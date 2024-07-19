import React from "react";
import { Component } from "react";
import "./index.css";

class AddPlayerForm extends Component {
  state = {
    newPlayerName: "",
    newPlayerTime: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddPlayer = (event) => {
    event.preventDefault();
    const { newPlayerName, newPlayerTime } = this.state;
    const newPlayer = {
      serialNo: this.props.remainingPlayers.length + 4,
      name: newPlayerName,
      time: newPlayerTime,
    };

    this.props.onAddPlayer(newPlayer);

    this.setState({ newPlayerName: "", newPlayerTime: "" });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ newPlayerName: "", newPlayerTime: "" });
    this.props.onCancel();
  };

  render() {
    const { newPlayerName, newPlayerTime } = this.state;

    return (
      <form onSubmit={this.handleAddPlayer} className="formContainer">
        <input
          type="text"
          name="newPlayerName"
          value={newPlayerName}
          onChange={this.handleChange}
          placeholder="Player Name"
          required
        />
        <input
          type="text"
          name="newPlayerTime"
          value={newPlayerTime}
          onChange={this.handleChange}
          placeholder="Player Time (mm:ss.SSS)"
          required
        />
        <div className="buttonFormContainer">
          <button type="submit">Add Player</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default AddPlayerForm;
