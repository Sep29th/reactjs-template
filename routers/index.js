import PrivateRouters from "../components/PrivateRouters";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Topic from "../pages/Topic";
import Answers from "../pages/Answers";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import NotFound from "../components/NotFound";

export const routers = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        element: <PrivateRouters />,
        children: [
          {
            path: "topic",
            element: <Topic />,
          },
          {
            path: "answers",
            element: <Answers />,
          },
          {
            path: "quiz",
            children: [
              {
                path: ":id",
                element: <Quiz />,
              },
            ],
          },
          {
            path: "result",
            children: [
              {
                path: ":id",
                element: <Result />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
