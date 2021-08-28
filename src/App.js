import "./styles.css";
import styled from "styled-components";
import { Wild } from "./Wild";
const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(p) => p.color || "black"};
`;

const Box2 = styled(Box)`
  background: yellow;
`;

const Try = Wild("div")`
  background: pink;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(p) => p.color || "black"};
`;

const Try2 = Wild(Try)`
  background: green;
`;
export default function App() {
  return (
    <div className="App">
      <div>
        <Box>box 1</Box>
        <Box2>box 2</Box2>
        <Box color="green">box 1 - version 2</Box>
      </div>
      <hr />
      <div>
        <Try>try 1 ping</Try>
        <Try2>try 2 green</Try2>
        <Try color="yellow">try 1 version 2</Try>
      </div>
    </div>
  );
}
