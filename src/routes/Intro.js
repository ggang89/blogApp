import { styled } from "styled-components";
const Box = styled.div`
  width: 500px;
  height: 500px;
  //background-color: darkcyan;
  border:10px solid darkgreen;
  margin: 20px auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Text = styled.p`
  font-weight: 900;
  font-size: 30px;
  text-align: center;
`;

export default function Intro() {
  return (
    <Box>
      <Text>Welcome to the Fake Blog, created with Free Fake API🎉</Text>
    </Box>
  );
}
