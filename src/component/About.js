import { Button, Paper, Grid } from '@mui/material';
import './About.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


export default function About() {

    return (<div>
        <Grid container spacing={3}>
            <Grid item xs={12} className='head'>About me</Grid>
            <Grid item xs={5} className='main' >
                <div className='image'>
                    <img className='myimage' src="myphoto.png" />
                </div>
            </Grid>

            <Grid item xs={7}>
                <div className='content'>

                    <div className='who'>I'm Professional web Developer having 10 Years Of Experience.</div>
                </div>

                <div className='me'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</div>

                <div className='address'>
                    <Paper elevation={3}>
                        <div className='address-bar'>
                            <div className='email'>
                                <div><EmailIcon /></div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px' }}>Email</div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px', marginLeft: '10px' }}>:prashantprajapati9310@gmail.com</div>

                            </div>

                            <div className='email'>
                                <div><PhoneIcon /></div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px' }}>phone</div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px', marginLeft: '10px' }}>:7470578247</div>
                            </div>

                        </div>

                        <div className='address-bar2'>
                            <div className='email'>
                                <div><LocationOnIcon /></div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px' }}>location</div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px', marginLeft: '10px' }}>:Gwalior madhya pradesh</div>
                            </div>

                            <div className='age'>
                                <div><CalendarMonthIcon /></div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px' }}>Age</div>
                                <div style={{ fontFamily: 'poppins', fontSize: '15px', marginLeft: '10px' }}>:20</div>
                            </div>

                        </div>

                    </Paper>
                </div>

                <div className='btn'>
                    <a className='resume' href='prashantresume.pdf' download="prashantprajapatiresume.pdf">Download Resume</a>
                </div>
            </Grid>
        </Grid>
    </div>)





    
}