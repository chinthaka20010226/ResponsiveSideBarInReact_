import React from 'react';
import { FaTh, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Siedebar(){
    const menuItems = [
        {
            path:"/about",
            name:"Dashboard",
            icon:<FaTh />
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaTh />
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaTh />
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaTh />
        },
        {
            path:"/productList",
            name:"ProductList",
            icon:<FaTh />
        }
    ]

    return(
        <div className='container'>
            <div className='sidebar'>
                <div className='top-section'>
                    <h1 className='logo'>Logo</h1>
                    <div className='bar'>
                        <FaBars />
                    </div>
                </div>
                <div className='body-section'>
                    {
                        menuItems.map((items, index) => (
                            <NavLink to={items.path} key={index} className="link" activeclassName="active">
                                <div className='icon'>{items.icon}</div>
                                <div className='link-text'>{items.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Siedebar;