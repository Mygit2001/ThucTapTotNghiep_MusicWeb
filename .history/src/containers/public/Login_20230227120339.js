import React from 'react'
import {InputForm } from  '../../components'
const Login = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className ='bg-gradient-to-r from-cyan-400 to-blue-400 w-[600px] p-[30px] pb-[100px] rounded-md shadow-md'>
                <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
                <div className='w-full flex flex-col gap-3'>
                    <InputForm label={'Số điện thoại'}/>
                    <InputForm label={'Mật khẩu'}/>
                </div>
                <button
                 type='button'
                 className='outline-none rounded-md hover:under'
                >

                </button>
            </div>
        </div >
    )
}

export default Login