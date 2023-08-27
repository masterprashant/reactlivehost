import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery,useTheme} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css"
export default function Header(){

    const[color,setColor]=useState(false)
    const[show,setShow]=useState(false)
    const[toggle,setToggle]=useState(false)

    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleShow=()=>{
    setShow(true)
    setToggle(true)
    
  }
  const handleHide=()=>{
    setShow(false)
  }

    const changeColor=()=>{
     if(window.scrollY>=10)
     setColor(true)
     else
     setColor(false)
    }
    window.addEventListener("scroll",changeColor)
    return <div className={color?"header header-bg":"header"} >
        <div className={color ?"logo logo-color":"logo"}>PORTFOLIO</div>
        <div className={color?"tab tab-color":"tab"}>
           
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                
                <li>Contact</li>



            </ul>
           
        </div>

        <div className="menu">
        <MenuIcon/>
        </div>
        
    </div>
    // return <div>
    //    <AppBar >
    //         <Toolbar style={{background:'white',color:'#fff'}}>
    //             <div style={{display:'flex',width:'100%',marginLeft:'10%',justifyContent:'space-between'}}>
                   
    //                 <div style={{fontWeight:'bold',fontSize:25}}>
    //                   PORTFOLIO
    //                 </div>

    //                 <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'30%',marginRight:'10%',fontSize:19}}>
    //                     <div>Home</div>
    //                     <div>About</div>
    //                     <div>Contact</div>
    //                     <div>Resume</div>
    //                     <div>Contact</div>

                        
    //                 </div>
    //             </div> 
    //         </Toolbar>
    //     </AppBar>
    // </div>
}