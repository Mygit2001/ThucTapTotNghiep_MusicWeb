import React, {useState, useEffect} from 'react'
import icons from '../ultis/icons'
import path from '../ultis/path'
import { Search } from './'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const { HiArrowNarrowLeft, HiArrowNarrowRight, FcBusinessman, FiLogOut } = icons

//Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  
};
firebase.initializeApp(config)


const Header = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async (user) => {
          if(!user) {
            console.log('User is log out')
            return 
          }else {
            navigate(path.BUY_ACCOUNT)
            const name = user.displayName
            setUser(name)
            // const token = await user.getIdToken()
            // console.log('dang nhap với user token ', user.token)
          }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      }, []);

      const logout = async () => {
        await firebase.auth().signOut().catch(err => {
            console.log(err);
        })
        setUser(null)
        // navigate(path.LOGIN)
      }
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-[70%] items-center'>
                <div className='flex gap-6 text-gray-400'>
                    <span><HiArrowNarrowLeft size={24} /></span>
                    <span><HiArrowNarrowRight size={24} /></span>
                </div>
                <div className='w-1/2'>
                    <Search />
                </div>
            </div>
            <div className='flex items-center '>
                <div className='flex items-center gap-4'>
                    {user && <div className='flex items-center gap-1'>
                        <span ><FcBusinessman size={24}/> </span>
                        <span className='text-orange-300 font-semibold'>{user}</span>
                    </div>}
                    <div>
                   
                    {!user && <button title='Đăng nhập' onClick={() => navigate(path.LOGIN)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full w-[120px]'>Đăng nhập</button>}
                    {user && 
                    <div 
                    title='Đăng xuất'
                    onClick={() => {
                        logout()
                        navigate(path.HOME)
                    }} 
                    className='text-orange-400 cursor-pointer p-2 rounded-full bg-gray-50 hover:bg-blue-100 text-red-900' >
                        <FiLogOut size={20}/>
                    </div>}
                    
                    {/* {user && <button onClick={() => navigate(path.REGISTER)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[150px]'>Đăng kí</button>} */}
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Header