
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// component
import LGInput from '../model/LGInput';
import LoginRegisterBtn from '../model/LoginRegisterBtn';
// logic
import { loginLogic } from '../../logics/rlLogic';

const Login = ({isLogIn, setIsLogIn, setUserName, setUserEmail, setLoading}) => {

  const navigate = useNavigate()
  useEffect(() => {
    if (isLogIn) {
      navigate('/works');
    }
  }, [isLogIn]); // Ensure to include navigate in the dependency array

  return (<>
    <div className="flex items-center justify-center">
      <form className='bg-white flex flex-col gap-y-3 p-5 shadow-2xl rounded-2xl 
            max-[400px]:p-0 max-[400px]:shadow-none '
            onSubmit={(event) => loginLogic(event, navigate, setIsLogIn, setUserName, setUserEmail, setLoading)}>
        <LGInput id='lEmail' type='email'  placeHolder='Email' min={6} max={50}></LGInput>
        <LGInput id='lPassword' type='password' placeHolder='Password' min={6} max={50}></LGInput>
        <LoginRegisterBtn buttonttl='Login'></LoginRegisterBtn>
        <span className='cursor-default' id='testaccount'> Don’t have an Account? <Link  to='/register'className='underline hover:text-violet-500 active:text-red-500 '>Sign Up here!</Link></span>
      </form>
    </div>
  </>)
}

export default Login;