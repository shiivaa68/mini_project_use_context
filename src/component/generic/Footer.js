import React, { Component } from 'react';
import  ThemeContext from '../context/ThemeContext'



class Footer extends Component {
    render(){
        return(
            <footer style={{border: 'solid 1px', padding: '1em', margin: '1em',...this.context}}>
                <h2>my footer</h2>
            </footer>
        )
    }
}


Footer.contextType = ThemeContext

export default Footer;