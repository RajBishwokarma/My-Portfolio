import { Navigate, Outlet, Link } from 'react-router-dom'

export default function MainLayout({ uiColor }) {
    return (
      <div className="min-h-screen h-fit flex flex-col"
            style={{backgroundColor: uiColor}}>
        <div className="header " id='top'>
            <div className="bg-bws-10 text-[#333333] text-4xl text-center font-bold p-5" >My Portfolio</div>
            <nav className="bg-white hover:bg-transparent text-center font-medium flex flex-col justify-around px-10 transition-all shadow-lg sm:flex-row">
                <Link to="/welcome" className="flex-1 py-2 hover:bg-[#00000030] active:bg-[#00000080] duration-200">Welcome</Link>
                <Link to="/works" className="flex-1 py-2 hover:bg-[#00000030] active:bg-[#00000080] duration-200 ">Works</Link>
                <Link to="/aboutme" className="flex-1 py-2 hover:bg-[#00000030] active:bg-[#00000080] duration-200 " >About Me</Link>
            </nav>
        </div>
        <div className="body flex flex-col flex-1">
            <div className="flex flex-1 flex-col items-center justify-center w-full my-5 mx-auto ">
                <div className="bg-white text-black w-10/12 h-full p-10 rounded-md shadow-xl">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        <div className="footer bg-[#333333] text-center text-white p-5 ">
            <div className="">
                <div className="">My Contact Info</div>
                <div className="flex justify-around">
                <div className="flex flex-col  items-start">
                    <div className="">Email: <a href="mailto:rajaryanbishwokarma@gmail.com">rajaryanbishwokarma@gmail.com</a></div>
                    <div className="">phone no: +977 9708885807</div>
                </div>
                <div className="flex flex-col items-start">
                    <span className="">Connect me on:</span>
                    <span className="">
                        <a target='_blank' href='https://www.facebook.com/people/Lo-Il/pfbid02wcHAaQPozcwRUiVZQQ1rz5DAr8N8F3SuSNN9ueSMupzwjBqGrW7YSLNbnVUeM9JCl/' className="">Facebook</a>
                        <span className="px-2">|</span>
                        <a target='_blank' href='https://www.instagram.com/raj_bishwokarma_l0_ll/' className="">instagram</a>
                    </span>
                </div></div>
            </div>
        </div>
      </div>
    )
  }
