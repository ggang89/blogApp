import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Post from "./routes/post";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/post", element: <Post /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
