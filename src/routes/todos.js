import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  background-color: #ccc;
`;
const Title = styled.h2`
  text-align: center;
  padding: 40px 0px;
`;
const InputBox = styled.div`
  background: #aaa;
  width: 700px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 500px;
  height: 40px;
  font-size: 17px;
  border: 3px solid skyblue;
  border-radius: 15px;
  text-align: center;
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
`;
const Button = styled.button`
  width: 50px;
  height: 40px;
  background-color: #4b89dc;
  color: white;
  font-weight: 600;
  border: 0;
  border-radius: 10px;
  margin: 0 5px;
`;
export default function Todos() {
  const [loading, setLoading] = useState("true");
  const [todos, setTodos] = useState([]); //fetch로 불러온 투두
  const [input, setInput] = useState("");
  const [newTodo, setNewTodo] = useState([]); //input으로 추가한 투두

  const getTodos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=20`
    );
    const json = await response.json();
    setLoading(false);
    setTodos(json);
  };
  useEffect(() => {
    getTodos();
  });
  const addBtn = () => {
    const newArr = {
      id: uuidv4(),
      title: input,
      isEditing: false,
      completed: false,
    };
    setNewTodo([newArr, ...newTodo]);
    setInput(" "); //왜 input창 안 지워지냐
  };
  const handleInputText = (e) => {
    setInput(e.target.value);
  };
  const editBtn = (id) => {
    const newArr = newTodo.map((v) => {
      if (id === v.id) {
        return { ...v, isEditing: !v.isEditing };
      } else {
        return v;
      }
    });
    setNewTodo(newArr);
  };

  return (
    <>
      {loading ? (
        <Title>... 🐧 ... 🐧 ...</Title>
      ) : (
        <Wrapper>
          <Title>✅ To Do List</Title>
          <InputBox>
            <Label htmlFor="inputTodo">New ToDo is...</Label>
            <Input
              id="inputTodo"
              type="text"
              placeholder="Add Text"
                width="300px"
                value={input}
              onChange={handleInputText}
            ></Input>
            <Button onClick={addBtn}>추가</Button>
          </InputBox>
          <ul>
            {newTodo.map((v) => (
              <li key={v.id}>
                {v.isEditing ? (
                  <></>
                ) : (
                  <>
                    <p>{v.title}</p>
                    <Button
                      onClick={() => {
                        editBtn(v.id);
                      }}
                    >
                      수정
                    </Button>
                    <Button>완료</Button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>
                <p>{t.title}</p>
                <p>{t.id}</p>
                <p>completed:{t.completed.toString()}</p>
                {/* completed 왜 안오지? */}
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
}
