import React,{Suspense, lazy, suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import ProtectedRoutes from './hooks/Protect/ProtectedRoutes.jsx'
import LoginRoute from './hooks/Protect/LoginRoute.jsx'
import Register from './pages/Register.jsx'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Authorized from './pages/Authorized.jsx'
import Post from './pages/subPages/Post.jsx'
import Subject from './pages/subPages/Subject.jsx'
import Like from './pages/subPages/Like.jsx'
import Dislike from './pages/subPages/Dislike.jsx'
import Home from './pages/subPages/Home.jsx'
import Teacher from './pages/subPages/Teacher.jsx'


// const Login = lazy(() => import('./pages/Login.jsx'))
// const ProtectedRoutes = lazy(() => import('./hooks/Protect/ProtectedRoutes.jsx'))
// const LoginRoute = lazy(() => import('./hooks/Protect/LoginRoute.jsx'))
// const Register = lazy(() => import('./pages/Register.jsx'))
// const Authorized = lazy(() => import('./pages/Authorized.jsx'))
// const Post = lazy(() => import('./pages/subPages/Post.jsx'))
// const Subject = lazy(() => import('./pages/subPages/Subject.jsx'))
// const Like = lazy(() => import('./pages/subPages/Like.jsx'))
// const Dislike = lazy(() => import('./pages/subPages/Dislike.jsx'))
// const Home = lazy(() => import('./pages/subPages/Home.jsx'))
// const Teacher = lazy(() => import('./pages/subPages/Teacher.jsx'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});



const BrowserRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginRoute>
        <Login />
      </LoginRoute>
    ),
  },
  {
    path: "/AuthorizedUser",
    element: (
      // <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoutes>
          <Authorized />
        </ProtectedRoutes>
      // </Suspense> */}
    ),
    children: [
      {
        path: "/AuthorizedUser/home",
        element: <Home />,
      },
      {
        path: "/AuthorizedUser/post",
        element: <Post />,
      },
      {
        path: "/AuthorizedUser/subject",
        element: <Subject />,
      },
      {
        path: "/AuthorizedUser/like",
        element: <Like />,
      },
      {
        path: "/AuthorizedUser/dislike",
        element: <Dislike /> ,
      },
      {
        path: "/AuthorizedUser/teacher",
        element: <Teacher />,
      }
    ],
  },
  {
    path: "/register",
    element: (
      <LoginRoute>
        <Register />
      </LoginRoute>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={BrowserRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
