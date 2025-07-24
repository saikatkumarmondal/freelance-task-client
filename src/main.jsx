import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import Home from "./component/Home.jsx";
import AddTask from "./component/AddTask.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";
import BrowseTask from "./component/BrowseTask.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import UserCard from "./component/UserCard.jsx";
import AddCategory from "./component/AddCategory.jsx";
import Categories from "./component/Categories.jsx";
import TaskCards from "./component/TaskCards.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "addTask", Component: AddTask },
      { path: "browseTask", Component: BrowseTask },
      { path: "user/:email", Component: UserCard },
      { path: "/addCategory", Component: AddCategory },
      {
        path: "/categories",
        loader: () => fetch("http://localhost:7777/categories"),
        Component: Categories,
      },
      {
        path: "/tasks",
        loader: () => fetch("http://localhost:7777/tasks"),
        Component: TaskCards,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
