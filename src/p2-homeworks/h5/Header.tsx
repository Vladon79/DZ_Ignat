import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./HW5.module.css"

function Header() {
    return (
        <div className={s.header} >
            <ul className={s.navLink}>
                <li> <NavLink to="HW7-11" activeClassName={s.active}>HW7-11</NavLink></li>
                <li> <NavLink to="HW12" activeClassName={s.active}>HW12</NavLink></li>
                <li> <NavLink to="pre-junior" activeClassName={s.active}>pre-junior</NavLink></li>
            </ul>
            <div className={s.block} />
        </div>
    )
}

export default Header
