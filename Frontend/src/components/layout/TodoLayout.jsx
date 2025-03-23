
import { Outlet } from 'react-router-dom';
import { BtnModel } from '../../components/btn/BtnModel';
import { svg } from '../../assets/svgs';
import { TodoSlider } from '../../dw/Todo/components/TodoSlider';
import { logicNameEditBtn, todoSL } from '../../dw/Todo/logics/TodoSliderLogic';
import { useEffect, useState } from 'react';
import { logicDelAllTask } from '../../dw/Todo/logics/taskBtnLogics';
import axios from 'axios';

export default function TodoLayout(props) {
    const { userEmail, isLogIn, setUserName, uiColor, setUIColor } = props

    const [todoData, setTodoData] = useState([]) // todo data
    const [delAllPopup, setDelAllPopup] = useState(false) // Delete Popup
    const [nameEditPopup, setNameEditPopup] = useState(false) // Name Change Popup

    useEffect(() => {
        if (isLogIn) {
            (async() => {
                const getAllTask = await axios.get(`https://my-portfolio-b9tc.onrender.com/api/todo/user/getAllTask?email=${userEmail}`)
                if (getAllTask.data.getData) { 
                    setTodoData(getAllTask.data.getData)
                } else {
                    setTodoData([])
                }
            })()
        }else {
            setTodoData([])
        }
    }, [isLogIn])
    

    return (
        <div className="h-screen flex flex-col">
            <div>
                <TodoSlider {...props} setUIColor={setUIColor} setDelAllPopup={setDelAllPopup} setNameEditPopup={setNameEditPopup} />
            </div>
            <div className="flex items-center justify-between text-6xl text-center font-bold p-6 max-[480px]:text-5xl  max-[400px]:text-3xl">
                <div className="flex items-center absolute1 h-10 w-10  max-[350px]:w-8">
                    <BtnModel imgsrc={svg.burgerHuge} logic={todoSL} />
                </div>
                <div className='px-2'>Todo App</div>
                <div className='w-10'></div>
            </div>
            {delAllPopup && <AllDelPopupComp setDelAllPopup={setDelAllPopup} todoData={todoData} setTodoData={setTodoData} isLogIn={isLogIn} userEmail={userEmail} />}
            {nameEditPopup && <NameEditPopup setNameEditPopup={setNameEditPopup} setUserName={setUserName} isLogIn={isLogIn} userEmail={userEmail} />}
            <div className="flex-1">
                <Outlet context={{ uiColor, todoData, setTodoData }} />
            </div>
        </div>
    );
}

const NameEditPopup = (props) =>{
    const { setNameEditPopup, setUserName, isLogIn, userEmail } = props

    const [newName, setNewName] = useState('')
    return(
        <div id='alldelpopup' className="z-50 fixed text-white flex justify-center items-center w-full h-dvh">
            <div className=' bg-[#00000080] backdrop-blur-lg text-3xl text-center font-bold w-fit p-5 border-2 border-black rounded-2xl max-[400px]:p-2 '>
                <div className=' text-red-6001 underline p-3'>
                    <input type="text" value={newName} placeholder='min 2 letters, max 16' minLength={3} maxLength={16}
                        className=" px-7 py-1 mb-5 rounded-4xl border-2 border-black 
                            max-[600px]:text-xl max-[400px]:text-sm max-[400px]:px-4 " 
                        onChange={e=>setNewName(e.target.value)}
                        onKeyDown={e=>e.key==='Enter'&&logicNameEditBtn(newName, setNewName, setNameEditPopup, setUserName, isLogIn, userEmail)}/>
                </div>
                <div className="  flex justify-around">
                    <button className=" px-10 py-3 hover:text-red-700 border-2 border-black rounded-2xl 
                           max-[600px]:text-xl max-[400px]:text-sm max-[400px]:px-4 " 
                        onClick={()=> logicNameEditBtn( newName, setNewName, setNameEditPopup, setUserName, isLogIn, userEmail )} >Yes</button>
                    <button className=" px-10 py-3 hover:text-red-700 border-2 border-black rounded-2xl 
                           max-[600px]:text-xl max-[400px]:text-sm max-[400px]:px-4 " 
                        onClick={()=> setNameEditPopup(false)} >No</button>
                </div>
            </div>
        </div>
    )
}
const AllDelPopupComp = (props) =>{
    const { setDelAllPopup, todoData, setTodoData, isLogIn, userEmail } = props
    return(
        <div id='alldelpopup' className="z-50 fixed flex justify-center items-center w-full h-dvh">
            <div className=' bg-white  text-3xl text-center font-bold w-fit p-5 border-4 border-red-500 rounded-2xl max-[600px]:text-xl max-[400px]:text-sm max-[400px]:px-4 '>
                <div className=' text-red-6001 underline p-3'>
                    <div className="">Are U Sure? U Want To Delete</div>
                    <div className="">All of Your Data !!!</div>
                </div>
                <div className="  flex justify-around">
                    <button className=" px-10 py-3 hover:text-red-700 border-2 rounded-2xl " 
                            onClick={()=> logicDelAllTask( setDelAllPopup, todoData, setTodoData, isLogIn, userEmail )} >Yes</button>
                    <button className=" px-10 py-3 hover:text-red-700 border-2 rounded-2xl " onClick={()=> setDelAllPopup(false)} >No</button>
                </div>
            </div>
        </div>
    )
}