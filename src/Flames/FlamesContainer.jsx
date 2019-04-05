import React from "react";

class FlamesState extends React.Component {
  /**
   * Initializing the state
   */
  // state = {
  //     boyName: '',
  //     girlName: '',
  //     flamesCount: '',
  //     flamesArray: [],
  //     relationShip: '',
  // }
  componentWillMount() {
    this.boyName = "";
    this.girlName = "";
    this.flamesCount = "";
    this.flamesArray = [];
    this.relationShip = "";
  }
  /**
   * Resetting the flames array
   */
  resetFlamesArray = () => {
    this.flamesArray = [
      "Friendship",
      "Love",
      "Aunty/Uncle",
      "Marriage",
      "Revenge like Enemies",
      "Brother & Sister Relationship"
    ];
  };
  /**
   * Calculating the flames count of the given names
   */
  calculateFlamesCount = () => {
    for (let i = 0; i < this.boyName.length; i++) {
      for (let j = 0; j < this.girlName.length; j++) {
        if (this.boyName[i] === this.girlName[j]) {
          this.boyName = this.boyName.replace(this.boyName[i], "");
          this.girlName = this.girlName.replace(this.girlName[j], "");
          i = 0;
          j = 0;
        }
      }
    }
    this.flamesCount = this.boyName.length + this.girlName.length;
  };
  /**
   * reset flames container
   */
  resetFlamesContainer = () => {
    this.boyName = "";
    this.girlName = "";
    this.flamesCount = "";
    this.flamesArray = [];
    this.relationShip = "";
  };
}

const FlamesContainer = new FlamesState();

export { FlamesContainer };
export default { FlamesContainer };
