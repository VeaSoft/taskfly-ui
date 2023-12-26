import { useRoutes } from "react-router-dom"
import { DashboardRoutes, UserRoutes } from "./AppRoutes"

const Routes = () => useRoutes([DashboardRoutes, UserRoutes])

export default Routes
