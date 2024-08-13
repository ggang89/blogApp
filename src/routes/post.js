import { useState, useEffect } from "react"
import { styled } from "styled-components";


const Title = styled.h1`
  text-align: center;
`;
export default function Post() {
  const [loading, setLoading] = useState(true);
  const [posts, setPost]=useState([])
  const getPost = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    setPost(json);
    setLoading(false);
  }
  useEffect(() => {
    getPost();
  })
  return (
    <>
      {loading ? (
        <Title>... 🐧 ...</Title>
      ) : (
        <>
          <Title>
            Post
          </Title>
          <ul>
            {posts.map((p) => (
              <li key={p.id}>
                <p>📍Title: {p.title}</p>
                <div>📃body: {p.body}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}