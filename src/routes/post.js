import { useState, useEffect } from "react"
import { styled } from "styled-components";

const Wrapper = styled.div`
padding: 5px 10px;
//background-color: #ddd;
`
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
`;
const PostBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const Content = styled.div`
width: 40%;
height: 300px;
border:1px solid black;
padding: 10px 20px;
margin-bottom:50px;
`
const HeadLine = styled.div`
height:100px;
//background-color: black;
font-size: 18px;
font-weight: bold;
//text-align: center;
align-items: center;
display: flex;
`
const Text = styled.div`
padding: 0px 10px;
font-style:italic;
`
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
        <Wrapper>
          <Title>
            📃 Post
          </Title>
          <PostBox>
            {posts.map((p) => (
              <Content key={p.id}>
                <HeadLine>▫Title : "{p.title}"</HeadLine>
                <Text>💬 {p.body}</Text>
              </Content>
            ))}
          </PostBox>
        </Wrapper>
      )}
    </>
  );
}