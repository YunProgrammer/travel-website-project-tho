import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import logo from '../../images/pngegg (4).png';
import React from 'react';
const Sidebar = () => {
 
    return (
        <div className="sidebar">
           
            <div className="top">
                {/* <Link to="/admin" style={{ textDecoration: "none" }}>
                    <span className="logo"></span>
                </Link> */}
                <Link to="/"><img src={logo} alt="" className="logo" title="Go home page"/></Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                   
                    <Link to='/admin' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <Link to="/admin/contact" style={{ textDecoration: "none" }}>
                        <li>
                            <ContactPhoneOutlinedIcon className="icon" />
                            <span>Contact</span>
                        </li>
                    </Link>
                    <Link to="/admin/package" style={{ textDecoration: "none" }}>
                        <li>
                            <AirplaneTicketOutlinedIcon className="icon" />
                            <span>Package</span>
                        </li>
                    </Link>
                   
                  

                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>

                </ul>
            </div>
           

        </div>
    );
};

export default Sidebar;
