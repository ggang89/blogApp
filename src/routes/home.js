import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Post from "./post";
import { Link } from "react-router-dom";
const Title = styled.h1`
  text-align: center;
`;
const Nav = styled.ul`
  height: 50px;
  line-height: 50px;
  width: 400px;
  background: #bbb;
  margin:0 auto;
 text-align: center;
`;
const Li = styled.li`
  display: inline-block;
  padding-right: 20px;
  font-size: 16px;
  //font-weight: 600;
  font-style: italic;
  
`;
function Home() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState("");

  const getBlog = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await result.json();
    setBlog(json.title);
    setLoading(false);
  };
  useEffect(() => {
    getBlog();
  });
  return (
    <>
      {loading ? (
        <Title>Loading...🐧🐧🐧</Title>
      ) : (
        <>
          <Title>
            <Link to="/"> {blog}</Link>
          </Title>
          <Nav>
            <Li>
              <Link to="/">◾ Home</Link>
            </Li>
            <Li>
              <Link to="/post">◾ Post</Link>
            </Li>
            <Li>
              <Link to="/photos">◾ Photos</Link>
            </Li>
            <Li>
              <Link to="/todos">◾ Todos</Link>
            </Li>
          </Nav>
          <Post />
        </>
      )}
    </>
  );
}

export default Home;
