import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"

const ListenerDashboard = () => {

  return (
    <>
    <Topbar/>
    <div className="flex justify-center items-center h-screen w-screen bg-slate-200">
      <Outlet />
    </div>
    <Navbar/>
    </>
  )
}

export default ListenerDashboard