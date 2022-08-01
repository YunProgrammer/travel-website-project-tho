import React from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Card, CardContent } from '@material-ui/core';
import '../ContactPage/ContactDialog.css'
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.black,
    },
  });

// export interface DialogTitleProps extends WithStyles<typeof styles> {
//   id: string;
//   children: React.ReactNode;
//   onClose: () => void;
// }

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme: Theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);


export default function CustomizedDialogs() {

 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


  return (
    <div>
      <button className="myBtn" onClick={handleClickOpen}>
        Contact
      </button>
      <Dialog aria-labelledby="customized-dialog-title" id='dialog-contain' className='dialog-contain' open={open}
      style={{opacity: 1}}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Contact Us 
        </DialogTitle>
        <DialogContent dividers id='DialogContent'>
        <Grid>
        <Card id='card'>
          <CardContent id='cardcontent'>
            <form>
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item >
                  <TextField className='Gridcontainer' placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item >
                  <TextField className='Gridcontainer' placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} >
                  <TextField className='Gridcontainer' placeholder="Enter street" label="Street" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12} >
                  <TextField className='Gridcontainer' placeholder="Enter city" label="City" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12} >
                  <TextField className='Gridcontainer' placeholder="Enter State Province" label="State Province" variant="outlined" fullWidth  />
                  </Grid>
                <Grid item xs={12}>
                  <TextField className='Gridcontainer' type="number" placeholder="Enter Zipcode" label="Zip code" variant="outlined" fullWidth />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField className='Gridcontainer' type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} >
                  <TextField className='Gridcontainer' type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField className='Gridcontainer' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                <Button 
                className="contactBtn" 
                style={{width: '100%', color: 'white' } } 
                >Submit
                </Button>

                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}