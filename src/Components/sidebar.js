import React, { useState } from 'react';
import { 
    FaTh, 
    FaBars, 
    FaUserAlt, 
    FaRegChartBar, 
    FaCommentAlt, 
    FaShoppingBag, 
    FaThList 
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Siedebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuItems = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh />
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt />
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar />
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt />
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag />
        },
        {
            path:"/productList",
            name:"ProductList",
            icon:<FaThList />
        }
    ]

    return(
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
                <div className='top-section'>
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                    <div style={{marginLeft: isOpen ? "30px" : "0px", paddingLeft: isOpen ? "40px" : "0px"}} className='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className='body-section'>
                    {
                        menuItems.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className='icon'>{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Siedebar;