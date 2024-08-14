import { useEffect, useState } from "react"
import { styled } from "styled-components";

const Wrapper = styled.div`
background-color:#ccc;

`
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
`;

export default function Todos() {
  const [loading, setLoading] = useState("true")
  const [todos, setTodos] = useState([]);
  
  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await response.json();
    setLoading(false);
    setTodos(json);
     
  };
  useEffect(() => {
    getTodos();
  })

  return (
    <>
      {loading ? (
        <Title>... 🐧 ... 🐧 ...</Title>
      ) : (
        <Wrapper>
          <Title>✅ To Do List</Title>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>
                <p>{t.title}</p>
                <p>{t.id }</p>
                <p>completed:{t.completed}</p>
                {/* completed 왜 안오지? */}
                
              </li>
            ))}
           
            </ul>
        </Wrapper>
      )}
    </>
  );
}