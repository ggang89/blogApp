import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Post from "./post";

const Title = styled.h1`
  text-align: center;
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
            <Title> {blog}</Title>
            <Post/>
        </>
      )}
    </>
  );
}

export default Home;
