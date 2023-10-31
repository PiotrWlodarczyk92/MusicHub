import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute bottom-0 h-16 w-screen bg-slate-400 md:relative md:w-32 md:h-screen md:items-center">
      <ul className="flex justify-around items-center flex-row md:flex-col">
        <li>Home</li>
        <li>Search</li>
        <li>Favourites</li>
        <li>Playlists</li>
      </ul>
    </nav>
  )
}

export default Navbar