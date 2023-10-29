import { Link, Navigate, useNavigate } from 'react-router-dom'
import supabase from '../supabaseClient'
import { useState } from 'react';

const Register = () => {
const [formData, setFormData] = useState({
  name:'',
  email:'',
  password:'',
  account_type:''
})

const navigate = useNavigate()

async function handleSubmit(e) {
  e.preventDefault();

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        account_type: formData.account_type,
      }
    }
  })

  const {} = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  console.log(formData)

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
      <h2 className="text-4xl text-white font-bold">Create Account</h2>
      <form onSubmit={handleSubmit} className="w-5/6 flex flex-col bg-slate-600 px-4 py-8 rounded-xl text-white text-xl font-bold gap-2">
        <input type="radio" name="account_type" id="fan_account" value="fan" onChange={handleChange}></input>
        <label for="fan_account">I'm a fan</label>
        <input type="radio" name="account_type" id="artist_account" value="artist" onChange={handleChange}></input>
        <label for="artist_account">I'm an artist</label>
        <label>Name</label>
        <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
        <label>E-mail</label>
        <input type="email" placeholder="E-mail" name="email" onChange={handleChange}></input>
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
        <button type="submit" className="bg-slate-400 text-white font-bold rounded-xl p-2">Create Account</button>
      </form>
      <h3 className="text-white text-xl p-8 text-center">You already have an account? Click <Link to={"/login"} className="font-extrabold text-2xl text-slate-400">here</Link> to log in.</h3>
    </div>
  )
}

export default Register