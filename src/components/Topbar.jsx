import { Link } from "react-router-dom"
import supabase from "../supabaseClient"

const Topbar = () => {

    function handleLogout() {
        async function handleLogout() {
          const { } = await supabase.auth.signOut()
          window.location.reload()
        }
        handleLogout()
      }
  return (
    <div className="w-screen px-4 h-16 flex justify-between items-center bg-slate-400">
        <h2>Hello user!</h2>
        <div className="flex items-center gap-4">
          <div>User Avatar</div>
          <button onClick={handleLogout}>Log out</button>
          <Link to="edit-profile">Edit Profile</Link>
        </div>
    </div>
  )
}

export default Topbar