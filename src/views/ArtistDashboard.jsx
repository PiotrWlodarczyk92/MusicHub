import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"

const ArtistDashboard = () => {

  return (
    <>
    <Topbar/>
    <div className="flex flex-col md:flex-row-reverse">
      <div className="flex justify-center items-center h-screen w-screen bg-slate-200">Here will be all the dashboard stuff</div>
      <Navbar/>
    </div>
    </>
  )
}

export default ArtistDashboard