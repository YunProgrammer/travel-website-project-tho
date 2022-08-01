
import TextField from '@mui/material/TextField';
import React, {  useState, useRef, useContext } from 'react';
import { Grid, Avatar, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import accountApi from '../../api/accountApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import AuthContext from '../../Components/authProvider';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SignIn = ({ handleChange }) => {

  const initialaccountLogin = {
    userName: "",
    password: "",

  };
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const [accountLogin, setaccountLogin] = useState(initialaccountLogin);
  const [submitted, setSubmitted] = useState(false);
  const [notify, setNotify] = useState('');
  const [severity, setSeverity] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [success, setSuccess] = useState(false);

  const vertical = 'bottom'
  const horizontal = 'right';

  const handleInputChange = event => {
    const { name, value } = event.target;
    setaccountLogin({ ...accountLogin, [name]: value });

  };
  const checkInput = (values) => {
    const errors = {};
    let count = 0;
    if (!values.userName) {
      errors.userName = "Username is required!";
      count += 1;
    }
    if (!values.password) {
      errors.password = "Password is required";
      count += 1;
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      count += 1;
    } else if (values.password.length > 10) {
      count += 1;
      errors.password = "Password cannot exceed more than 10 characters";
    }
    setFormErrors(errors);
    return count;
  };



  const login = () => {

    if (checkInput(accountLogin) > 0) {
      setSeverity('error')
      setNotify('Fail')
      setSubmitted(true)
    } else {
      var datas = {
        userName: accountLogin.userName,
        passwordHash: accountLogin.password,
      };

      accountApi.signIn(datas)
        .then(res => {
          console.log(JSON.stringify(res?.data))
          const accessToken = res?.data?.token;
          const roles = res?.data?.user?.role;
          setAuth({ accountLogin, roles, accessToken });
        
          if (res.data.msg === 'Logged in!') {

            setSeverity('success')
            setNotify(res.data.msg)
            console.log(res.data.msg)
            setSubmitted(true)
            setSuccess(true)
            if (roles === 'admin') {
              setIsAdmin(true)
            } else {
              setIsAdmin(false)
            }

          } else {
            setSeverity('error')
            setNotify(res.data.msg)
            console.log(res.data.msg)
            setSubmitted(true)
          }

        })
        .catch(e => {
          console.log(e)
          console.log('error')
        })

      setaccountLogin(initialaccountLogin);
    }
  }

  const handleClose = () => {
    setSubmitted(false)
  }
  const paperStyle = { padding: 20, margin: "0 auto" }
  const avatarStyle = { backgroundColor: 'orange', color:'black' }
  const btnstyle = { margin: '8px 0',backgroundColor: 'orange', color:'black'  }
  return (
    <>        
      {
        success ? (
          <Box style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><CheckOutlinedIcon /></Avatar>
              <Typography variant='h3' component='h3'>You are logged in!</Typography>
              <br />
              <br />
              <br />
              {isAdmin ?
                (
                  <>
                    <Link href="/" variant='h5' underline="none">
                      Home
                    </Link>
                    <br />
                    <br />
                    <Link href="admin" variant='h5' underline="none">
                      Management
                    </Link>
                  </>
                )
                :
                (<Link href="/" variant='h5' underline="none">
                  Home
                </Link>)
              }

            </Grid>

          </Box>
        ) :

          (
            <Grid>
              <Box style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                  <Typography>Sign In</Typography>
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
                    label='UserName'
                    placeholder="Enter your user name"
                    onChange={handleInputChange}
                    value={accountLogin.userName}
                    name='userName'
                    error={formErrors.userName}
                    helperText={formErrors.userName}
                  />
                  <TextField
                    fullWidth

                    value={accountLogin.password}
                    type="password"
                    label='Password'
                    name='password'
                    placeholder="Enter your password"
                    // id="outlined-search"
                    onChange={handleInputChange}
                    error={formErrors.password}
                    helperText={formErrors.password}
                  />

                </Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Button
                  onClick={login}
                  type='buton'
                //   color='orange'
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  Sign in
                </Button>              

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
              </Box>
            </Grid>
          )}
    </>

  )
}

export default SignIn