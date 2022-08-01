import * as React from 'react';
import '../Packages/PackagePage.css'
import { useStyles } from './styled';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { useEffect, useState } from 'react'


import { Box, Grid, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import PackageDetail from './PackageDetail';
import NavBar from '../NavBarMain/NavBarMain';

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

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

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



export default function RowAndColumnSpacing() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [pack, setPackage] = useState([]);
  const getData = async () => {
    await axios.get('http://localhost:5000/packages')
      .then(res => {
        const myData = res.data;
        setPackage(myData)

      })
      .catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    getData()
  }, [])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar/>
      <Box sx={{ width: '100%' }} className="boxcontainer">

        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pack.map((p) => (
            <Grid item xs={2} sm={4} md={4} key={p.packID}>
              <Card sx={{ maxWidth: 100 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  img src={p.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.packTitle}

                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                    {p.packPrice}

                  </Typography>
                </CardContent>
                <CardActions>
                  <button size="small" className='myBtn' onClick={handleClickOpen}>Learn More</button>
                  <Dialog id='dialog-contain'
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    className='dialog-contain'
                    style={{ opacity: 0.95 }}
                  >
                    <DialogTitle id="package-dialog-title" onClose={handleClose}>
                      Central America Tours
                    </DialogTitle>
                    <DialogContent dividers id='PackageDialogContent'>

                      <PackageDetail />

                    </DialogContent>

                  </Dialog>

                </CardActions>
              </Card>
            </Grid>
          ))}


        </Grid>
      </Box>
    </div>

  );
}


