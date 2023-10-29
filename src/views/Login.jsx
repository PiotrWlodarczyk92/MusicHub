import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import supabase from '../supabaseClient'

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  
  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault();
  
    const {} = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
  
    navigate('/')
  }
  
  function handleChange(e) {
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 bg-login bg-cover">
      <h2 className="text-4xl text-white font-bold">Log in</h2>
      <form onSubmit={handleSubmit} className="w-5/6 flex flex-col bg-slate-600 px-4 py-8 rounded-xl text-white text-xl font-bold gap-2">
        <label>E-mail</label>
        <input type="email" placeholder="E-mail" name="email" onChange={handleChange}></input>
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
        <button type="submit" className="bg-slate-400 text-white font-bold rounded-xl p-2">Log In</button>
      </form>
      <h3 className="text-white text-xl p-8 text-center">You don't have an account? Click <Link to={"/register"} className="font-extrabold text-2xl text-slate-400">here</Link> to create one.</h3>
    </div>
  )
}

export default Login