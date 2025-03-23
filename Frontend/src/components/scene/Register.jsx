import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// component
import LGInput from '../model/LGInput';
import LoginRegisterBtn from '../model/LoginRegisterBtn';
// logic
import { registerLogic } from '../../logics/rlLogic';

const Register = ({setLoading}) => {

  const navigate = useNavigate()
  
  return (
    <div className="flex items-center justify-center">
      <form className='bg-white flex flex-col gap-y-3 p-5 shadow-2xl rounded-2xl
            max-[400px]:p-0 max-[400px]:shadow-none '
          onSubmit={(event)=>registerLogic(event, navigate, setLoading)}>
        <LGInput id='rUsername' type='text' placeHolder='Username' min={2} max={20}  ></LGInput>
        <LGInput id='rPassword' type='password' placeHolder='Password' min={6} max={50}></LGInput>
        <LGInput id='rEmail' type='email'  placeHolder='Email' min={6} max={50}></LGInput>
        <LoginRegisterBtn buttonttl='Register' ></LoginRegisterBtn>
        <span className='cursor-default' id='testaccount'> Already have an Account? <Link  to='/login' className='underline ab hover:text-violet-500 active:text-red-500 '>Sign In here!</Link></span>
      </form>
    </div>
  );
};

export default Register;


