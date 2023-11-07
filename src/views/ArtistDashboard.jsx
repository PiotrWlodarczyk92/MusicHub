import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"

const ArtistDashboard = () => {

  return (
    <>
    <Topbar/>
    <div className="flex flex-col md:flex-row-reverse">
      <div className="flex justify-center items-center h-screen w-screen bg-slate-200">
        <Link to="add-album">Add new album</Link>
        <Outlet/>
      </div>
      <Navbar/>
    </div>
    </>
  )
}

export default ArtistDashboard