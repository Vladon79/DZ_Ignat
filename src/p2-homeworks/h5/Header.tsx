import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./HW5.module.css"

function Header() {
    return (
        <div className={s.navlink} >
            <ul className={s.navlink}>
                <li> <NavLink to="junior" activeClassName={s.active}>junior</NavLink></li>
                <li> <NavLink to="junior+" activeClassName={s.active}>junior3+</NavLink></li>
                <li> <NavLink to="pre-junior" activeClassName={s.active}>pre-junior</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
