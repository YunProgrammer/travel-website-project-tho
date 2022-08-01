import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slider from '../Slider/Slider';



const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function SliderDialogs({children,title}) {
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
        More photos
      </button>
      <Dialog id='dialog-contain' 
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    className='dialog-contain'
                    // style={{opacity: 0.95}}
                    >
                        <DialogContent dividers id='PackageDialogContent'>
                        <Slider/>
                        </DialogContent>
       
                    </Dialog>
    </div>
  );
}