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
    <div className="absolute top-0 w-screen h-16 flex justify-between bg-slate-400">
        <h2>Hello user!</h2>
        <div>User Avatar</div>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Topbar