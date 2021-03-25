import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './style/sidebar.css'

class SideBar extends Component {
    render(){
        return(
            <aside style={{flex: 1, border: 'solid 1px', padding: '1em', margin: '1em', ...this.context}}>
                <h3>my sidebar</h3>
                <ul>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/post/:id">POST</NavLink></li>
                    <li><NavLink to="/profile">PROFILE</NavLink></li>
                </ul>
            </aside>
        )
    }
}

export default SideBar;