import { Paper,Grid } from "@mui/material"
import "./Service.css"
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';

export default function Service()
{
  return(<div>
        <Grid container spacing={3}>
          <Grid item xs={12} className='head1'>
            <div className="head2">
              <div className="head3">What I Do</div>
              <div className="head4">My Services</div>
            </div>
            </Grid>

            <Grid item xs={4} style={{marginLeft:'2%'}}>
            <div className="body">
              <Paper elevation={3}>
                <div className="body1">
                  <div className="icon"><ComputerIcon fontSize="20px"/></div>
                  <div className="web" >reactjs developer</div>
                  <div className="explain">LoremncccccccccccccccccccccccccccccccLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac</div>
                </div>
              </Paper>
            </div>
            </Grid>

            <Grid item xs={4} >
            <div className="body">
              <Paper elevation={3}>
                <div className="body1">
                  <div className="icon"><ComputerIcon fontSize="20px"/></div>
                  <div className="web" >full stack developer</div>
                  <div className="explain">LoremncccccccccccccccccccccccccccccccLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac</div>
                </div>
              </Paper>
            </div>
            </Grid>
          
            <Grid item xs={3} style={{marginLeft:'2.2%'}} >
            <div className="body">
              <Paper elevation={3}>
                <div className="body1">
                  <div className="icon"><DevicesIcon fontSize="20px"/></div>
                  <div className="web" >Responsive</div>
                  <div className="explain">LoremncccccccccccccccccccccccccccccccLorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
              </Paper>
            </div>
            </Grid>
          
          
          
        </Grid>
  </div>)









    // return(<div className="service">
    //     <div className="what">What We Do</div>
    //     <div className="head">My Services</div>

    //     <div className="content">
    //     <Paper elevation={3} className="paper" style={{width:'25%',height:'300px',marginLeft:'8%',}}>
    //         <div className="developer">
    //       <div className="icon" ><ComputerIcon fontSize="4px"/></div>  
    //       <div style={{fontSize:'30px',fontFamily:'poppins',fontWeight:'700px'}}>Frontend developer</div>
    //       <div style={{marginLeft:'35px',marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac</div>  
    //       </div>

          
    //     </Paper>

    //     <Paper elevation={3} className="paper" style={{width:'25%',height:'300px'}}>
            
    //     <div className="developer">
    //       <div className="icon" ><ComputerIcon fontSize="4px"/></div>  
    //       <div style={{fontSize:'30px',fontFamily:'poppins',fontWeight:'700px'}}>Backend developer</div>
    //       <div style={{marginLeft:'35px',marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac</div>  
    //       </div>

    //     </Paper>

    //     <Paper elevation={3} className="paper" style={{width:'25%',marginRight:'8%',height:'300px'}}>
            
    //     <div className="developer">
    //       <div className="icon" ><DevicesIcon fontSize="4px"/></div>  
    //       <div style={{fontSize:'30px',fontFamily:'poppins',fontWeight:'700px'}}>Responsive</div>
    //       <div style={{marginLeft:'35px',marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac</div>  
    //       </div>

    //     </Paper>
    //     </div>

    // </div>)

}