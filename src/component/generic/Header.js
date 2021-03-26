import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext'



class Header extends Component {
    render(){
        return(
          <ThemeContext.Consumer>
         {
           theme =>
           <header style={{border:'solid 1px ',padding:'1em' ,margin:'1em' ,display:'flex' ,justifyContent:'space-between',...theme}}>
           <h2>my header</h2>
           </header>
         }
          </ThemeContext.Consumer>
        )
    }
}

export default Header;