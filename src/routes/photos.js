import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 5px 10px;
  //background-color: #ddd;
`;
const Box = styled.div`
  //background-color: #ccc;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
`;
const Content = styled.div`
background: black;
color:white;
justify-content: space-between;
display: flex;
width:300px;
height: 180px;
margin: 20px;
`
const PhotoTitle = styled.p`
font-size: 14px;
align-items: center;
display: flex;
text-align: center;
`
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
`;
export default function Photos() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const json = await response.json();
    setLoading(false);
    setPhotos(json);
  }
  useEffect(() => {
    getPhotos();
  })
  return (
    <>
      {loading ? (
        <Title>...🐧🎥 ...</Title>
      ) : (
        <Wrapper>
          <Title>🎥 Photo</Title>
          <Box>
            {photos.map((p) => (
              <Content key={p.id}>
                <PhotoTitle>💌 {p.title}▫</PhotoTitle>
                <img src={p.thumbnailUrl} alt={p.title}></img>
              </Content>
            ))}
          </Box>
        </Wrapper>
      )}
    </>
  );
}