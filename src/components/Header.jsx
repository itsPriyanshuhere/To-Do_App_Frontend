import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context, server } from '../main';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Header = () => {

 const { isAuthenticated, setisAuthenticated, loading, setLoading } = useContext(Context);

 const logoutHandler = async () =>{

  setLoading(true);
  try {
    await axios.post(`${server}/users/logout`,
    {
      withCredentials: true,
    }
  );
  toast.success("Logged Out Successfully");
  setisAuthenticated(false);
  setLoading(false);
  } catch (error) {
    toast.error(error.response.data.message);
    setisAuthenticated(true);
    setLoading(false);
  }
  
};

  return (
    <nav className='header'>
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {
          isAuthenticated ? <button disabled={loading} onClick={logoutHandler} className='btn'>Logout</button>:
          <Link to={"/login"}>Login</Link>
        }
      </article>
    </nav>
  );
};

export default Header;
