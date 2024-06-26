import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }


  const handleLogin = async(event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
  
      const emailParts = userCredential.user.email.split('@');
      const displayName = emailParts[0]; 
  
      const userData = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: displayName
      };
  
      dispatch(login(userData));
      navigate('/');
    } catch (error) {
      setMessage('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <p className="text-center text-2xl font-bold">Login</p>
        <form method="post" autoComplete="on">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <div className="relative mt-1">
              <input type="email" name="email" value={user.email} placeholder="Email Id" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required onChange={handleChange} />
            </div>
          </div>
         
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input type="password" name="password" placeholder="Password" value={user.password} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required onChange={handleChange} />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleLogin}>
              LOGIN
            </button>
            <div className="mt-1">
              <p className="underline cursor-pointer" onClick={()=>navigate('/sign-up')}>Create an account</p>
            </div>
          </div>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  )
}

export default Login;
