/**
 * import react packages and styled components to use inside the Result class component
 */
import React from "react";
import { RelationShipContainer } from "./styles";
import { FlamesContainer } from "./FlamesContainer";

/**
 * Rendering the final result
 */
class Result extends React.Component {
  render() {
    const isValidProps = this.props && this.props.relationShip;
    console.log("***", isValidProps, this.props);
    return (
      <>
        {isValidProps && (
          <RelationShipContainer>
            {"Given boy and girl relationship is "}
            <i>
              <b>{this.props.relationShip}</b>
            </i>
          </RelationShipContainer>
        )}
      </>
    );
  }
}

export { Result };
export default { Result };
