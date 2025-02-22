
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// component
import LGInput from '../model/LGInput';
import LoginRegisterBtn from '../model/LoginRegisterBtn';
// logic
import { loginLogic } from '../../logics/rlLogic';

const Login = ({isLogIn, setIsLogIn, setUserName, setUserEmail}) => {

  const navigate = useNavigate()
  useEffect(() => {
    if (isLogIn) {
      navigate('/works');
    }
  }, [isLogIn]); // Ensure to include navigate in the dependency array

  return (<>
      
    <div className="h- flex items-center justify-center">
      <form className='bg-white flex flex-col gap-y-3 w-2/5 p-5 shadow-2xl rounded-2xl'
            onSubmit={(event) => loginLogic(event, navigate, setIsLogIn, setUserName, setUserEmail)}>
        <LGInput id='lEmail' type='email'  placeHolder='Email' min={6} max={15}></LGInput>
        <LGInput id='lPassword' type='password' placeHolder='Password' min={6} max={15}></LGInput>
        <LoginRegisterBtn buttonttl='Login'></LoginRegisterBtn>
        <span className='cursor-default' id='testaccount'> Don’t have an Account? <Link  to='/register'className='underline hover:text-violet-500 active:text-red-500 '>Sign Up here!</Link></span>
      </form>
    </div>
  </>)
}

export default Login;