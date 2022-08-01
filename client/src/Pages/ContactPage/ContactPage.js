import React, { useState } from 'react'

import { Grid, TextField, Card, CardContent, Typography, Button } from '@material-ui/core';
import ContactApi from '../../api/ContactAPI';
import { useStyles } from './styled';
import NavBar from '../../Components/NavBarMain/NavBarMain';

export const ContactPage = () => {
  const initialContact = {
      firstName: '',
      lastName: '',
      emailAddr: '',
      street: '',
      city: '',
      stateProvince: '',
      countryCode: '',
      Phone: '',
      messageHolder: ''
    }
    const [contact, setContact] = useState(initialContact);
    const handleInputChange = event => {
      const { name, value } = event.target;
      setContact({ ...contact, [name]: value });
      console.log(contact)
    };
    const saveContact = () => {
      ContactApi.create(contact)
        .then(response => {  
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
  
        });
      setContact(initialContact)
    };
    const classes = useStyles();
      return (
        <div className={classes.root}>  
        <NavBar/>
          <Grid style={{paddingTop:"120px" }}>
            <Card style={{ maxWidth: 650, padding: "10px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" color='orange'>
                  Contact Us 
              </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" 
                      value = {contact.firstName} 
                       onChange={handleInputChange} 
                       name="firstName"fullWidth required  />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter last name" 
                      label="Last Name" variant="outlined" 
                      value = {contact.lastName}   
                      onChange={handleInputChange}
                      name="lastName" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <TextField placeholder="Enter street" 
                      label="Street" variant="outlined"
                       value = {contact.street}  
                        onChange={handleInputChange}
                        name="street"
                         fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6} > 
                      <TextField placeholder="Enter city" label="City" variant="outlined" 
                      value = {contact.city}  
                      name="city"
                       onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField placeholder="Enter State Province" label="State Province" 
                      variant="outlined" 
                      name="stateProvince"
                      value = {contact.stateProvince}  
                      onChange={handleInputChange} fullWidth required />
                      </Grid>
                    {/* <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter Zipcode" label="Zip code" 
                      variant="outlined" value = {contact.getZIP_Code}  
                      name="getZIP_Code"
                      onChange={handleInputChange} fullWidth required />
                    </Grid> */}
                    
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" 
                      value = {contact.emailAddr}  
                      name="emailAddr"
                      onChange={handleInputChange} 
                      fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter phone number" label="Phone"
                       variant="outlined"
                       name="Phone"
                        value = {contact.Phone}  
                       onChange={handleInputChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" multiline rows={5} 
                      placeholder="Type your message here" variant="outlined" 
                      value = {contact.messageHolder}  
                      onChange={handleInputChange} 
                      name="messageHolder"
                      fullWidth required />
                    </Grid>
                    <Grid item xs={12}  >
                    <Button className="myBtn" style={{width: '100%', background:'orange'}} 
                    onClick={saveContact} >
                      Submit
                      
                    </Button>
                    </Grid>
  
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      )
};