import { useState,useEffect } from "react"

export default function Post() {
  const [loading, setLoading] = useState(true);
  const [posts, setPost]=useState([])
  const getPost = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    console.log(json)
    setPost(json)
    setLoading(false)
  }
  useEffect(() => {
    getPost();
  })
  return (
    <>
      {loading ? (
        <span>... ...</span>
      ) : (
        <ul>
          {posts.map((p) => (
            <li>
              <p>📍Title: {p.title}</p>
              <div>📃body: {p.body}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}