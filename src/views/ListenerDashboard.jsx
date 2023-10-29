import Navbar from "../components/Navbar"
import supabase from "../supabaseClient"

const ListenerDashboard = () => {

  function handleLogout() {
    async function handleLogout() {
      const { } = await supabase.auth.signOut()
      window.location.reload()
    }
    handleLogout()
  }

  return (
    <div>
      <Navbar/>
      <h1>Hello user</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default ListenerDashboard