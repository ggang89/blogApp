import { useState, useEffect } from "react";
import { styled } from "styled-components";

// const PhotoBox = styled.div`
// background-color: #bbb;
// width: 400px;
// height: 100%;
// `
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
      {loading ? (<h1>... ...</h1>) : (
        <>
          {photos.map((p) => (<div key={p.id}>
            <p>{p.title}</p>
           <div>{}</div>
          </div>))}
        </>
  )}
    </>
  )
}