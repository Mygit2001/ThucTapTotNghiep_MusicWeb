import React from "react";
import { InputForm } from "../../components";
import path from '../../ultis/path'
import { useNavigate, NavLink } from 'react-router-dom'
// import firebase from 'firebase/compat/app'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// const uiConfig = {
//   signInFlow: 'popup',
//   signInSuccessUrl: '/register',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     // firebase.auth.FacebookAuthProvider.PROVIDER_ID
//   ],
// };
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 w-[600px] p-[30px] pb-[100px] rounded-md shadow-md">
        <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
        <div className="w-full flex flex-col gap-5">
          <InputForm label={"Số điện thoại"} />
          <InputForm label={"Mật khẩu"} />
          <button
            type="button"
            className="w-full outline-none rounded-md  hover:bg-blue-800  flex items-center justify-center gap-1 bg-blue-700 text-white py-2 text-lg"
          >
            Đăng nhập
          </button>
        </div>
        <div className="flex items-center justify-between mt-5">
            <small className="text-blue-800 text-[16px] cursor-pointer hover:text-red-700">Quên mật khẩu</small>
            <NavLink 
            className="text-blue-800 text-[16px] cursor-pointer hover:text-red-700"
            to={path.REGISTER}
            >Đăng kí</NavLink>
        </div>
      </div>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
    </div>
    
  );
};

export default Login;
