import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuChevronDown } from "react-icons/lu";
import { IoChevronForwardSharp } from "react-icons/io5";

function Sidebar() {
    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setToggleSubmenu] = useState(false);

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
            setToggleSubmenu(!isToggleSubmenu);
        } else {
            setActiveTab(index);
            setToggleSubmenu(true);
        }
    }

    return (
        <div className="sidebar fixed top-0 left-0 z-[100] w-full sm:w-[50%] md:w-[25%] lg:w-[20%] h-full bg-gray-800">
            {/* <div className="nav-btn">
                <IoChevronForwardSharp />
            </div> */}
            <Link to="/" className='no-underline'>
                <div className="logowrapper py-4 px-4">
                    <h3 className='text-white text-2xl'>Tecti<span className='text-orange-300 px-1'>Task</span></h3>
                </div>
            </Link>
            <div className="sidebarTabs flex flex-col">
                <ul>
                    <li>
                        <Button className={`w-full ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><LuLayoutDashboard /></span>
                            Dashboard
                        </Button>
                    </li>
                    <li className={`${activeTab === 1 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                        <Button className={`w-full ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><BsListTask /></span>
                            Task
                            <span className='arrow ml-auto w-[25px]'><LuChevronDown /></span>
                        </Button>
                        {activeTab === 1 && isToggleSubmenu && (
                            <div className="submenu">
                                <Button className='w-full'>
                                    <span className='dot'>Today's Task</span>
                                </Button>
                            </div>
                        )}
                    </li>
                    <li>
                        <Button className={`w-full ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><SlCalender /></span>
                            Calender
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-full ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdOutlineAccessTime /></span>
                            Time Management
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-full ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><IoIosSettings /></span>
                            Setting
                        </Button>
                    </li>
                    <li>
                        <Button className={`w-full ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><CgProfile /></span>
                            Profile
                        </Button>
                    </li>
                    <hr />
                    <li>
                        <Button className={`w-full ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                            <span className='icon mr-1 ml-2 text-xl w-[25px] h-[25px] flex items-center justify-center rounded-md'><BiLogOut /></span>
                            Logout
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
