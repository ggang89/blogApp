import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Post from "./routes/post";
import Photos from "./routes/photos";
import Todos from "./routes/todos";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/post", element: <Post /> },
  { path: "/photos", element: <Photos /> },
  { path: "/todos", element: <Todos /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
