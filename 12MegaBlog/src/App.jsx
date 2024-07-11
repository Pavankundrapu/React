import './App.css'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom';

function App() {

   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
  
   useEffect(() => {
     authService.getCurrentUser()
     .then((userData)=>{
      if(userData)
      { 
        dispatch(login({userData}));
      }
      else
      {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
    }, []);


//this is conditional redeering of the component.
 return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className='w-full block'>
      <Header/>
      <main>
       todo: <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
 ) : <div>Loading...</div>;
}

export default App
