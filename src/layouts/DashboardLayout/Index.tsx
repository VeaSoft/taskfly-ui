import React, { useEffect, useReducer } from "react"
import { Outlet } from "react-router-dom"
import Nav from "../navbar"

const DashboardLayout = (props: any) => {
  const initialState = {
    openMobileSideBar: false,
  }
  const [_, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    initialState,
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("dashboard layout");
  }, [])

  return (
    <div className="font-latoRegular bg-[#EEF6FF] overflow-x-hidden w-screen h-screen relative">
      <div>
        <header className="bg-white rounded-lg right-0 fixed w-full z-10 top-0 ">
          <Nav />
        </header>
      </div>
      <div className=" mt-16 w-full">
          <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
