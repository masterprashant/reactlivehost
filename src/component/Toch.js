import React,{createRef} from "react";
import { Button,Grid} from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "./toch.css"
export default function Toch(){
    return(
        <div className="container" >
            <div  className="main" >
            <Button variant="contained" >
                Touch
</Button>
            </div>
            <div className="box" >
                <div className="box1"> 
                Get In Toch
                </div>
                <div className="box3">     
            this web side is good webside this web inport for plesses contect to email
             and phone number and other plateform linked 
            you are dout so contect to me 
            </div>
            </div>
           
<Grid container spacing={3} style={{width:'100%',height:'400px',marginTop:'1%',justifyContent:'center'}}>
    <Grid item xs={5}>
        <Grid item xs={12}>  
    <TextField id="outlined-basic" label="Name" variant="outlined"    fullWidth />
    </Grid>
    {/* <div style={{display:'flex', width:'477px',height:'60px',flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>       */}
    <Grid item xs={6}>     
    <TextField id="outlined-basic" label="Email" variant="outlined"   size="small" fullWidth />

    </Grid> 
    <Grid item xs={6}>   
    {/* <div style={{marginLeft:'8%',width:'240px'}} > */}
    <TextField id="outlined-basic" label="Subject" variant="outlined"   size="small" fullWidth />
    {/* </div> */}
    </Grid>  
    {/* </div>    */}
    <Grid item xs={12}>      
    <TextField
          id="outlined-multiline-static"
          label="you are here..."
          multiline
          rows={6}
          fullWidth
        />
        </Grid>
        <div style={{marginTop:'3%'}}> 
        <Button variant="contained" color="primary" fullWidth>
            set Message
</Button >
</div>

      
            </Grid>
           
            <Grid item xs={6}>
  <Paper className="paper1">
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'90%',width:'100%'}}>             
    <div  className="home">
    <div>
        <HomeIcon style={{color:'blue'}}/>
    </div>
    <div className="home1">   
Home
   
    <div>   
    1719 Del Dew Drive Annapolis Junction, MD 20701 California, United State
    </div>
    </div>
    
    </div>
    <div  className="phone">
    <div>
        <LocalPhoneIcon style={{color:'blue'}}/>
    </div>
    <div className="phone1">   
Phone
   
    <div style={{marginTop:'2%'}}>   
        8602157973
    </div>
    <div style={{marginTop:'2%'}}>   
        7509400387
    </div>
    </div>
    </div>
    <div  className="email">
    <div>
        <EmailIcon style={{color:'blue'}}/>
    </div>
    <div className="email1">   
Email
   
    <div>   
    ClarenceSRoberts@jourrapide.com
    </div>
    </div>
    
    </div>
    </div>
</Paper>

            </Grid>
    
</Grid>
        </div>
    )
}