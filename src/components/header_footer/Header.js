import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'; 
import SideDrawer from './sideDrawer';


class Header extends Component {

    state = {
        drawerOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
          <AppBar
          position="fixed"
          style={{
              backgroundColor: 'black',
              boxShadow: 'none',
              padding: '10px 0px'
          }}>
         
            
             <Toolbar>

                 <div className="header_logo">
                 <div className= "font_righteous header_logo_venue">GetAJob</div>
                 <div className= "header_logo_title">ASAP</div>

                 </div>
                 <div className="header_labels">

                
                 <Button id= "JobBoard" variant= "contained" color="white"
                 style={{
                     padding: '10px 10px'
                 }}>
              Job Board
          </Button>
          <Button variant= "contained" color="white"
           style={{
                     padding: '10px 10px'
                 }}>
              Your Career Services Info
          </Button>
          </div>


                 <Button
                 aria-label="Menu"
                 color="white">
                  
                 </Button>
                 <IconButton
                 aria-label="Menu"
                 color="inherit"
                 onClick={()=> this.toggleDrawer(true)}
                 >
                    <MenuIcon/>
                 </IconButton>
                 <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={(value)=> this.toggleDrawer(value)}
                    />

             </Toolbar>
          </AppBar>
        );
    }
}

  


export default Header;