/**
 * importing the packages, and styles to use inside the Flames class
 */
import React from "react";
import { FlamesContainer } from "./FlamesContainer";
import {
  FormContainer,
  InputBox,
  SubmitButton,
  FlamesContainerBox,
  Header
} from "./styles";
import { Result } from "./Result";

/**
 * Global array declaration for access through out the file scope
 */
let circularArray = [];

/**
 * Flames class declaration and definition
 */
class Flames extends React.Component {
  componentWillMount() {
    this.setState({
      boyName: FlamesContainer.boyName,
      girlName: FlamesContainer.girlName,
      flamesCount: FlamesContainer.flamesCount,
      flamesArray: FlamesContainer.flamesArray,
      relationShip: FlamesContainer.relationShip
    });
  }
  /**
   * Setting the flames array
   * Circular array logic implementation
   */
  setFlamesArray = startIndex => {
    function Circular(arr, startIntex) {
      this.arr = arr;
      this.currentIndex = startIntex || 0;
    }
    Circular.prototype.next = function() {
      var i = this.currentIndex,
        arr = this.arr;
      this.currentIndex = i < arr.length - 1 ? i + 1 : 0;
      return this.current();
    };

    Circular.prototype.prev = function() {
      var i = this.currentIndex,
        arr = this.arr;
      this.currentIndex = i > 0 ? i - 1 : arr.length - 1;
      return this.current();
    };

    Circular.prototype.current = function() {
      return this.arr[this.currentIndex];
    };
    circularArray = new Circular(FlamesContainer.flamesArray, startIndex);
  };

  /**
   * Finding the relationship with calculated flames count
   */
  findRelationShip = () => {
    let startIndex = "";
    for (let i = 1; i < FlamesContainer.flamesCount; i++) {
      circularArray.next();
    }
    if (FlamesContainer.flamesArray.length > 0) {
      FlamesContainer.flamesArray.forEach(function(item, key) {
        if (!startIndex && key === FlamesContainer.flamesArray.length - 1)
          startIndex = 0;
        else if (item === circularArray.current()) startIndex = key;
      });
      FlamesContainer.flamesArray = FlamesContainer.flamesArray.filter(
        item => item !== circularArray.current()
      );
    }
    this.setFlamesArray(startIndex);
  };
  /**
   * Form submiting function
   */
  onSubmit = event => {
    event.preventDefault();
    FlamesContainer.boyName = event.currentTarget[0].value.toLowerCase();
    FlamesContainer.girlName = event.currentTarget[1].value.toLowerCase();
    if (FlamesContainer.boyName && FlamesContainer.girlName) {
      FlamesContainer.resetFlamesArray();
      FlamesContainer.calculateFlamesCount();
      this.setFlamesArray(0);
      let count = 6;
      while (count > 1) {
        count--;
        this.findRelationShip();
      }
      FlamesContainer.relationShip = circularArray.current();
    } else FlamesContainer.resetFlamesContainer();
    this.setState({
      boyName: FlamesContainer.boyName,
      girlName: FlamesContainer.girlName,
      flamesCount: FlamesContainer.flamesCount,
      flamesArray: FlamesContainer.flamesArray,
      relationShip: FlamesContainer.relationShip
    });
  };
  render() {
    /**
     * default render function of a class
     */
    return (
      <FlamesContainerBox>
        <Header>{"Lets play Flames Game"}</Header>
        <FormContainer onSubmit={this.onSubmit}>
          <InputBox placeholder={"Boy Name"} />
          <InputBox placeholder={"Girl Name"} />
          <SubmitButton>{"Start"}</SubmitButton>
        </FormContainer>
        <Result {...FlamesContainer} />
      </FlamesContainerBox>
    );
  }
}

/**
 * exporting the Flames class to use anywhere
 */
export { Flames };
export default { Flames };
