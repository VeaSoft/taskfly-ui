import React from "react"
import { Navigate } from "react-router-dom"
import Home from "../pages/home"
import Pricing from "../pages/pricing"
import DashboardLayout from "../layouts/DashboardLayout/Index"
import Login from "../pages/getStarted"
import AppLayout from "../layouts/AppLayout"
import Dashboard from "../pages/getStarted/Dashboard"
import Project from "../pages/getStarted/project"
import Task from "../pages/getStarted/task"
import AuthHoc from "../components/AuthWrapper"

export const DashboardRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "pricing", element: <Pricing /> },
    {path: "login", element: <Login />},
    { path: "*", element: <Navigate to="/" /> },
  ],
}

export const UserRoutes = {
  path: "/",
  element: <AuthHoc component={AppLayout} />,
  children: [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/project/:_id", element: <Project /> },
    // { path: "/task", element: <Task /> },
  ],
}
