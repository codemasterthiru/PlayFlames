/**
 * importing the styled from styled-components to render the html tags
 */
import styled from "styled-components";

const FlamesContainerBox = styled.div`
  margin: 0 auto;
  padding-top: 25px;
  width: 320px;
`;
const Header = styled.header`
  font-size: 28px;
  color: #16ad38;
  border-bottom: 5px solid #16ad38;
  font-weight: bold;
  font-style: italic;
`;
const FormContainer = styled.form`
  padding-top: 25px;
`;
const InputBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #4caf50;
  box-sizing: border-box;
`;
const SubmitButton = styled.button`
  position: relative;
  background-color: #4caf50;
  border: none;
  font-size: 24px;
  color: #ffffff;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  border-radius: 10px;
`;
const RelationShipContainer = styled.div`
  @keyframes random {
    15% {
      color: red;
    }
    30% {
      color: yellow;
    }
    45% {
      color: green;
    }
    60% {
      color: blue;
    }
    75% {
      color: black;
    }
  }
  margin-top: 25px;
  -webkit-animation: random 5s infinite;
  animation: random 5s infinite;
`;

/**
 * exporting the const variable styles to use as jsx elements,
 * in the required place.
 */
export {
  FormContainer,
  InputBox,
  SubmitButton,
  FlamesContainerBox,
  Header,
  RelationShipContainer
};
