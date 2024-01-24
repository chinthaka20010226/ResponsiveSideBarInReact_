import React from 'react';
import { FaTh, FaBars } from 'react-icons/fa';

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
                    <ul>
                        {menuItems.map((menuItems, index) => (
                            <li key={index}>
                                <a href={menuItems.path}>
                                    {menuItems.icon}
                                    {menuItems.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Siedebar;