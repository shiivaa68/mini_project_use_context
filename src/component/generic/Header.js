import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
          <header style={{border:'solid 1px ',padding:'1em' ,margin:'1em' ,display:'flex' ,justifyContent:'space-between'}}>
                <h2>my header</h2>
          </header>
        )
    }
}

export default Header;