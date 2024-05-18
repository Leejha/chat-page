import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { FC, Suspense, lazy } from "react";
import App from "../App";
import { PATH } from "./path";

const Error = lazy(() => import("../pages/error"));
const Loading = lazy(() => import("../pages/loading"));
const LoginPage = lazy(() => import("../pages/login-page"));
const ChatPage = lazy(() => import("../pages/chat-page"));

const routes: RouteObject[] = [
  {
    path: PATH.LOGIN_PAGE,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: PATH.CHAT_PAGE,
        element: (
          <Suspense fallback={<Loading />}>
            <ChatPage />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const Routes: FC = () => {
  return <RouterProvider router={router} />;
};
