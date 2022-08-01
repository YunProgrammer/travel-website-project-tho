

import React, { useEffect, useState,useRef } from 'react';

import { Grid,  Avatar, Typography, Button,  } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import accountApi from '../../api/accountApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
    const initialAccount = {
        userID: 0,
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role:"visitor",
    };

    const userRef = useRef();
  

    const [account, setAccount] = useState(initialAccount);
    const [submitted, setSubmitted] = useState(false);
    const [notify, setNotify] = useState('');
    const [severity, setSeverity] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const vertical = 'bottom'
    const horizontal = 'right';

    useEffect(() => {
        userRef.current.focus();
    }, [])



    const handleInputChange = event => {
        const { name, value } = event.target;
        setAccount({ ...account, [name]: value });
        
    };

    const checkInput = (values) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const errors = {};
        let count = 0;
        if (!values.userName) {
            errors.userName = "Username is required!";     
            count+=1;       
        }
        if (!values.email) {
            errors.email = "Email is required!";
            count+=1; 
        } else if (!regex.test(values.email)) {         
            errors.email = "This is not a valid email format!";
            count+=1;         }
        if (!values.password) {
            errors.password = "Password is required";
            count+=1; 
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
            count+=1; 
        } else if (values.password.length > 10) {
            count+=1; 
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.confirmPassword) {
            count+=1; 
            errors.confirmPassword = 'ConfirmPassword is required';
        } else if (values.confirmPassword !== values.password) {    
            count+=1;     
            errors.confirmPassword = "ConfirmPassword does not match";
        }
        setFormErrors(errors);
        return count;
    };

    const submit = () => {
        if (checkInput(account) > 0) {
           
            setSeverity('error')
            setNotify('Fail')
            setSubmitted(true)
        } else {
           
            var datas = {
                userName: account.userName,
                email: account.email,
                passwordHash: account.confirmPassword,
                role:account.role,
            };

            accountApi.signUp(datas)
                .then(res => {
                    setSeverity('success')
                    setNotify('Success')
                    setSubmitted(true)
                    console.log(JSON.stringify(res.data))
                })
                .catch(e => {
                    console.log(e)
                })
                setAccount(initialAccount); 
        }


    }

    const handleClose = () => {
        setSubmitted(false)
    }

 
    const paperStyle = { padding: 20, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'orange', color:'black'  }
    const marginTop = { marginTop: 5 }
    const btnstyle = { margin: '8px 0',backgroundColor: 'orange', color:'black'  }
    return (
        <Grid>
            <Box style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography component='h2' style={headerStyle}>Sign Up</Typography>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        
                        fullWidth
                        // id="outlined-search"
                        ref={userRef}
                        label='User Name'
                        placeholder="Enter your user name"
                        onChange={handleInputChange}
                        value={account.userName}
                        name='userName'
                        error={formErrors.userName}
                        helperText={formErrors.userName}
                    />
                    <TextField
                        fullWidth
                        
                        label='Email'
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        value={account.email}
                        name='email'
                        error={formErrors.email}
                        helperText={formErrors.email}
                    />
                    <TextField
                        fullWidth
                        
                        value={account.password}
                        type="password"
                        label='Password'
                        name='password'
                        placeholder="Enter your password"
                        // id="outlined-search"
                        onChange={handleInputChange}
                        error={formErrors.password}
                        helperText={formErrors.password}
                    />
                    <TextField
                        fullWidth
                        
                        // id="outlined-search"
                        type="password"
                        label='Confirm Password'
                        placeholder="Confirm your password"
                        onChange={handleInputChange}
                        value={account.confirmPassword}
                        name='confirmPassword'
                        error={formErrors.confirmPassword}
                        helperText={formErrors.confirmPassword}
                    />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                            onClick={submit}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid item xs={12} >
                     
                        <Snackbar
                            open={submitted}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            
                            anchorOrigin={{ vertical, horizontal }}
                            key={vertical + horizontal}
                        >
                            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                                {notify}
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default SignUp;