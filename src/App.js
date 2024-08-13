import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  text-align: center;

`;

function App() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState("");

  const getBlog = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await result.json();
    console.log(json);
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
          <Title>Title: {blog}</Title>
        </>
      )}
    </>
  );
}

export default App;
