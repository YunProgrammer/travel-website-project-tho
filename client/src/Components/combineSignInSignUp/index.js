import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../../Pages/LogInPage/LogInPage';
import SignUp from '../../Pages/signUp';
import Container from '@mui/material/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    // backgroundColor:'black',
    backgroundImage: `url(${'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function SignInSide() {

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ minHeight: '100vh' }}
      >
        <br />
        <br />
        <br />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.75)',
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="inherit"
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"

          >
            <Tab label="Log IN" />
            <Tab label="Register" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <SignIn handleChange={handleChange} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp />

          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}