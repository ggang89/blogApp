import { useState, useEffect } from "react"
import { styled } from "styled-components";
import PostPage from "../components/PostPage";

const Wrapper = styled.div`
padding: 5px 10px;
//background-color: #ddd;
`
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
`;


export default function Post() {
  const [loading, setLoading] = useState(true);
  const [posts, setPost]=useState([])
  const getPost = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
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
        <Title>... 🐧...Loading ...</Title>
      ) : (
        <Wrapper>
          <Title>
            📃 Post
          </Title>
            <PostPage
            posts={posts}/>
        </Wrapper>
      )}
    </>
  );
}