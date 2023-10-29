import { Link } from 'react-router-dom'
import supabase from './supabaseClient'
import { useEffect, useState } from 'react'
import ListenerDashboard from './views/ListenerDashboard'
import ArtistDashboard from './views/ArtistDashboard'

const App = () => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
    console.log(session.user.user_metadata.account_type)
    })
  }, [])

  return (
    <>
    {!session
    ?  <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 bg-background bg-cover">
        <h1 className="text-5xl font-extrabold text-white">MusicHub</h1>
        <h2 className="text-2xl font-bold text-white text-center">Publish, sell and discover new music</h2>
        <Link to={"login"}><button className="bg-gray-400 rounded-xl p-4 text-2xl text-white font-bold">Get Started</button></Link>
      </div>   
    : (session.user.user_metadata.account_type === "fan"
      ? <ListenerDashboard/>
      : (session.user.user_metadata.account_type === "artist"
        ? <ArtistDashboard/>
        : null
        )
      )
      
    }
    </>
  )
}

export default App
