import {Paper,Grid,TextField} from "@mui/material"
import "./Contact.css"


export default function Contact()
{
    return(<div>
        <Grid container spacing={3}>
        <Grid item xs={12} className='head1'>
            <div className="head2">
              <div className="head3">Touch</div>
              <div className="head4">Get In Touch</div>
            </div>
        </Grid>

        <Grid item xs={6} style={{marginLeft:'2%'}}>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Email" placeholder="enter email" fullWidth/>
            </Grid>

            <Grid item xs={6}>
                <TextField variant="outlined" label="Email" placeholder="enter email" fullWidth/>
            </Grid>

            <Grid item xs={6}>
                <TextField variant="outlined" label="Email" placeholder="enter email" fullWidth/>
            </Grid>
        </Grid>
        </Grid>
    </div>)
}