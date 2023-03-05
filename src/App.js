import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Album, ArtistPage, Home, Login,Register, Personal, Public, Search, SearchAlbum, SearchAllInfo, SearchSongs, BuyAccount } from './containers/public/';
import * as actions from './store/actions';
import path from './ultis/path';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])


  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />} >
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.REGISTER} element={<Register />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
            <Route path={path.BUY_ACCOUNT} element={<BuyAccount />} />
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
