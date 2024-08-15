import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./routes/home";
import Post from "./routes/post";
import Photos from "./routes/photos";
import Todos from "./routes/todos";
import { createGlobalStyle } from "styled-components";
import Intro from "./routes/Intro";

const GlobalStyled = createGlobalStyle`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{list-style-type: style none;}
a{text-decoration:none}
button{cursor:pointer}`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="/intro" replace={true} />},
       {path:"intro",element:<Intro/>},
      { path: "post", element: <Post /> },
      { path: "photos", element: <Photos /> },
      { path: "todos", element: <Todos /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyled />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
  }
export default App;