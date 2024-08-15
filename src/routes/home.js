import { styled } from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
`;
const Nav = styled.ul`
  height: 50px;
  line-height: 50px;
  width: 400px;
  //background: #bbb;
  margin: 0 auto;
  text-align: center;
`;
const Li = styled.li`
  display: inline-block;
  padding-right: 20px;
  font-size: 14px;
  //font-weight: 600;
  font-style: italic;
`;
function Home() {
  
  return (
        <>
          <Title>
            <Link to="/">🌳 FAKE BLOG 🌳</Link>
          </Title>
          <Nav>
            <Li>
              <Link to="/intro">◾ Home</Link>
            </Li>
            <Li>
              <Link to="/post">◾ Post</Link>
            </Li>
          </Nav>
          <Outlet />
        </>
  );
}
export default Home;
