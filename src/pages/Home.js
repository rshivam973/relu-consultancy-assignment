import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import UserList from '../components/UserList';


function Home() {
  return (
    
      <div className="flex flex-row pr-6 py-2">
        <div className="flex-[0.2]">
          <Sidebar />
        </div>
        <div className="flex flex-row gap-4 flex-[0.8] w-full">
          <div className="flex-col flex-[0.7] w-full">
            <Navbar />
            <Post />
          </div>
          <div className="flex-[0.3] hidden md:block">
            <UserList />
          </div>
        </div>
        
      </div>
  );
}

export default Home;
