import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Content = styled.div`
  width: 40%;
  height: 300px;
  border: 1px solid black;
  padding: 10px 20px;
  margin-bottom: 50px;
`;
const HeadLine = styled.div`
  height: 100px;
  //background-color: black;
  font-size: 18px;
  font-weight: bold;
  //text-align: center;
  align-items: center;
  display: flex;
`;
const Text = styled.div`
  padding: 0px 10px;
  font-style: italic;
`;

export default function PostPage({posts }) {
  return (
    <PostBox>
      {posts.map((p) => (
        <Content key={p.id}>
          <HeadLine>
            <Link to={`/posts/${p.id}`}>🗨 "{p.title}"</Link>
          </HeadLine>
          <Text> ▫{p.body}</Text>
        </Content>
      ))}
    </PostBox>
  );
}
