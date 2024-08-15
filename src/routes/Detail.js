import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { styled } from "styled-components";

const Title=styled.h2`
  text-align: center;
  padding: 40px 0px;
  font-size: 28px;
`;
const Wrapper = styled.div`
margin:0 auto;
width:60%;
height:500px;`

const Text = styled.p`
font-size:20px;
line-height:40px;
`
export default function Detail() {
  const { postId } = useParams();
  const [loading, setLoading]=useState(true)
  const [post, setPost] =useState({})
  
  const getPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const json = await response.json();
    setLoading(false);
    setPost(json);
  }
  useEffect(() => {
    getPost();
  })
  return (
    <>
      {loading ? (
        <Title>...🐧.....🐧....🐧</Title>
      ) : (
        <Wrapper>
          <Title>✨Title: {post.title}</Title>
          <Text>🖋 {post.body}</Text>
        </Wrapper>
      )}
    </>
  );
  
}