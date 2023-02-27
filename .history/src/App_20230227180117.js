import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Album, ArtistPage, Home, Login, Personal, Public, Search, SearchAlbum, SearchAllInfo, SearchSongs } from './containers/public/';
import * as actions from './store/actions';
import path from './ultis/path';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyBcrLRtVv7dbeGmUMKM419Oq5JpMqQC4jw',
  authDomain: 'reactappmusic.firebaseapp.com',
  
};
firebase.initializeApp(config)

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])


  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async (user) => {
      if(!user) {
        console.log('User is log out')
        return 
      }else {
        console.log('dang nhap với ', user.displayName)
        const token = await user.getIdToken()
        console.log('dang nhap với user token ', user.token)
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />} >
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
            <Route path={path.ARTIST__PAGE} element={<ArtistPage />} />

            <Route path={path.SEARCH} element={<Search />} >
               <Route path={path.ALL} element={<SearchAllInfo />} />
               <Route path={path.SONG} element={<SearchSongs />} />
               <Route path={path.ALBUM__SEARCH} element={<SearchAlbum />} />
            </Route>

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
