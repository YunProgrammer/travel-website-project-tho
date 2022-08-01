import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// import { Grid } from '@material-ui/core';
// import PackImageList from './ImageList/PackImageList';
// import PackCardInfo from './PackCardInfo/PackCardInfo';
import '../Packages/PackageDetail.css'
import imgData from '../Packages/imgData';
import {ImageList, ImageListItem, ImageListItemBar, IconButton} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';

import Infodata from './InfoData';
import { Link } from 'react-router-dom';
// import PackageDetail from './PackageDetail.css';



function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
   return {
     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
     srcSet: `${image}?w=${width * cols}&h=${
       height * rows
     }&fit=crop&auto=format&dpr=2 2x`,
   };
 }

export default function PackageDetailPage() {

 

  return (
    

        <Grid container spacing={5} className='packagescontainer'>
        <Grid item xs={6} md={8} className='imgcontainer'>
          
            <ImageList
              sx={{
                width: 700,
                height: 400,
                transform: 'translateZ(0)',
              }}
              rowHeight={200}
              gap={2}
            >
              {imgData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                      {...srcset(item.img, 350, 250, rows, cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                        >
                          {/* <StarBorderIcon /> */}
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
 
        </Grid>
        
        <Grid item xs={6} md={4} className='infocontainer'>
        <Card sx={{ maxWidth: 500}} className='packcontainer'>
        <CardContent >
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
          <Link to="/contacts" className="myBtn">Book</Link>
        </CardActions>
  
      </Card>
        </Grid>
      </Grid>
     
   
  )
}