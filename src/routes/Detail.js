import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { styled } from "styled-components";


const Wrapper = styled.div`
margin:0 auto;
width:60%;
height:500px;`
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
  font-size: 28px;
  margin-bottom: 20px;
`;
const Content = styled.div`
border:1px solid grey;
border-radius: 20px;
height: 550px;
padding: 10px 40px;
margin-top: 20px;
`
const Text = styled.p`
font-size:19px;
line-height:40px;
//position: relative;
`
const ImgBox = styled.img`
margin: 0 auto;
padding: 20px;
display: flex;
//position: absolute;
//bottom: 0%;
`
const Commentul = styled.ul`
padding: 10px 30px;
margin-top: 20px;
`
const Li = styled.li`
border-bottom: 1px solid #eee;
padding: 20px;
list-style: none;
`
const Name = styled.p`
  font-style: oblique;
  font-size: 14px;
`;
const Reple = styled.p`
font-size: 17px;
padding: 5px 7px;
line-height: 30px;
`
export default function Detail() {
  const { postId } = useParams();
  const [loading, setLoading]=useState(true)
  const [post, setPost] = useState({})
  const [comments, setComments] =useState([])
  
  const getPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const json = await response.json();
    setLoading(false);
    setPost(json);
  }
  const getComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const json = await response.json();
    setComments(json);
  }
  useEffect(() => {
    getPost();
  
  })
  useEffect(() => {
      getComments();
  })//하나의 useEffect안에 함수 같이 써도 되나,따로 써야하나
  //계속 오류 나옴...
  return (
    <>
      {loading ? (
        <Title>...🐧.....🐧....🐧</Title>
      ) : (
        <Wrapper>
          <Content>
            <Title>✨ {post.title}</Title>
            <Text>
              🖋 {post.body}
              <ImgBox src=" https://picsum.photos/200/150" alt="pho " />
            </Text>
          </Content>

          <Commentul>
            {comments.map((c) => (
              <Li>
                <Name>
                  <strong>😀{`${c.name.slice(0, 10)}`}</strong>&emsp; 💌
                  {c.email}
                </Name>
                <Reple>💬{c.body}</Reple>
              </Li>
            ))}
          </Commentul>
        </Wrapper>
      )}
    </>
  );
  
}