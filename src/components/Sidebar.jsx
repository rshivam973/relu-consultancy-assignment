import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user'); 
    setUser(null);
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="p-2 bg-gray-200 rounded-full shadow-md lg:hidden fixed top-4 left-4 z-50"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <div 
        className={`fixed top-0 left-0 h-screen p-6 shadow-md bg-gray-100 transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64`}
      >
        <div className="text-2xl font-bold mb-6">
          {user ? `Welcome, ${user.displayName}` : 'LOGO'}
        </div>
        <ul className="space-y-4">
          <li className="hover:bg-gray-200 cursor-pointer p-2">Home</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Notifications</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Shop</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Conversation</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Wallet</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Subscription</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">My Profile</li>
          <li className="hover:bg-gray-200 cursor-pointer p-2">Settings</li>
        </ul>
        {user ? (
          <button onClick={handleLogout} className="mt-6 p-2 w-full bg-red-500 text-white rounded">
            Log out
          </button>
        ) : (
          <button onClick={handleLogin} className="mt-6 p-2 w-full bg-blue-500 text-white rounded">
            Log in
          </button>
        )}
      </div>
    </>
  );
}

export default Sidebar;
