import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Post from "./routes/post";
import Photos from "./routes/photos";
import Todos from "./routes/todos";
import { createGlobalStyle, styled } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Title = styled.h1`
  text-align: center;
`;
const Nav = styled.ul`
  height: 40px;
  line-height: 40px;
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
const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{list-style-type: style none;}
a{text-decoration:none}
button{cursor:pointer}
`;

const router = createBrowserRouter([
  { path: "/",element: <Home /> },
  { path: "/post", element: <Post /> },
  { path: "/photos", element: <Photos /> },
  { path: "/todos", element: <Todos /> },
]);

function App() {
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
      <GlobalStyled />
      {loading ? (
        <Title>Loading...🐧🐧🐧</Title>
      ) : (
        <>
          <Title>
            <Link to="/"> {blog}</Link>
          </Title>
          <RouterProvider router={router}>
            {" "}
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
          </RouterProvider>
        </>
      )}
    </>
  );
}

export default App;
