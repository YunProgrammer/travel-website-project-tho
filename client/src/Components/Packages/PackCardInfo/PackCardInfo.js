import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import PackageDetail from '../PackageDetail.css';
import Infodata from '../InfoData';

export default function PackCardInfo() {

    return (
    
      <Grid>
      <Card sx={{ maxWidth: 500}} className='packcontainer'>
        <CardContent>
          <Typography className='packTitle'>
          {Infodata[0].title}
          </Typography>

          <Typography className='packDescript' >
          {Infodata[0].shortDescription}
          </Typography >

          <Typography className='packDuration'>
            {Infodata[0].duration}
          </Typography>

          <Typography className='packExpDate'>
           {Infodata[0].expDate}
            <br />
          </Typography>
  
          <Typography className="price"> 
          {Infodata[0].discountedPrice}
          <span>{Infodata[0].originPrice}</span> 
          </Typography>
              
        </CardContent>
        
        <CardActions>
          <button className="myBtn">Learn More</button>
        </CardActions>
  
      </Card>
  
      </Grid>

    );
  }