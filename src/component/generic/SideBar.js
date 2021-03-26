import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './style/sidebar.css'
import ThemeContext  from '../context/ThemeContext'




class SideBar extends Component {


    static contextType = ThemeContext
    render(){
        return(
            <aside style={{flex: 1, border: 'solid 1px', padding: '1em', margin: '1em', ...this.context}}>
                <h3>my sidebar</h3>
                <ul>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/post">POST</NavLink></li>
                    <li><NavLink to="/profile">PROFILE</NavLink></li>
                </ul>
            </aside>
        )
    }
}

export default SideBar;