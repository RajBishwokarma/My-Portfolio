import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// component
import LGInput from '../model/LGInput';
import LoginRegisterBtn from '../model/LoginRegisterBtn';
// logic
import { registerLogic } from '../../logics/rlLogic';

const Register = () => {

  const navigate = useNavigate()
  
  return (
    <div className="flex items-center justify-center">
      <form className='bg-white flex flex-col gap-y-3 w-2/5 p-5 shadow-2xl rounded-2xl'
          onSubmit={(event)=>registerLogic(event,navigate)}>
        <LGInput id='rUsername' type='text' placeHolder='Username' min={6} max={20}  ></LGInput>
        <LGInput id='rPassword' type='password' placeHolder='Password' min={6} max={15}></LGInput>
        <LGInput id='rEmail' type='email'  placeHolder='Email' min={6} max={30}></LGInput>
        <LoginRegisterBtn buttonttl='Register' ></LoginRegisterBtn>
        <span className='cursor-default' id='testaccount'> Already have an Account? <Link  to='/login' className='underline ab hover:text-violet-500 active:text-red-500 '>Login in here!</Link></span>
      </form>
    </div>
  );
};

export default Register;


