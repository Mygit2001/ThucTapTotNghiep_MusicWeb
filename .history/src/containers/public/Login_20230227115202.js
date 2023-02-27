import React from 'react'
import {InputForm } from  '../../components'
const Login = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className ='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md'>
                <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
                <div className='w-full'>
                    <InputForm label={'Số điện thoại'}/>
                </div>
            </div>
        </div >
    )
}

export default Login