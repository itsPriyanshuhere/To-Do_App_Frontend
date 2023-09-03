import React, { useContext } from 'react';
import { Context, server } from '../main';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';

const Profile = () => {

  const { isAuthenticated,  loading, user } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
      loading ? <Loader /> :(
      <div>
      <h1>Welcome {user?.name}, to our to-do application</h1>
      <p>You can email at <a>agr@gmail.com</a> for any issue.</p>
      </div>
      )
  )
}

export default Profile