import React, { useState } from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Hawaii from '../../images/categories/Hawaii (3).png';
import Canada from '../../images/categories/Canada.png';
import Vietnam from '../../images/categories/Vietnam.png';


import data from './data';
import { Link } from "react-router-dom";
import NavBar from '../../Components/NavBarMain/NavBarMain';
// import { userStatusContext } from '../../App';

const HomePage = () => {

    const [selectionCount, setSelectionCount] = useState(0);

    const controlsClicked = num => {
        const count = selectionCount + (num);
        document.getElementById(`image${selectionCount}`).className += "selectedItem";
        return count > -1 && count < 3 && setSelectionCount(count);
    }

    const goTo = `/booking/${selectionCount}`;
    return (
        <>
        <NavBar/>
            <div className="homePage">
                {/**Home Page Main Portion starts here */}
                <div className="homeMainPortion">
                    <Row style={{ marginRight: "0px" }}>
                        <Col sm={4} md={4}>
                            <div className='SelectedPlace'>
                                <h1>{data[selectionCount].title}</h1>
                                <p>{data[selectionCount].shortDescription}</p>
                                <Link to={goTo}>
                                    <button className="myBtn" title="Proceed for booking a stay">Booking&#x2192;</button>
                                </Link>
                            </div>
                        </Col>
                        <Col sm={8} md={8}>
                            <div className="headerImg ml-4">
                                <Link to="/booking/0">
                                    <img src={Hawaii} id="image0" alt="" onClick={() => setSelectionCount(0)} />
                                </Link>
                                <Link to="/booking/1">
                                    <img src={Canada} id="image1" alt="" onClick={() => setSelectionCount(1)} />
                                </Link>
                                <Link to="/booking/2">
                                    <img src={Vietnam} id="image2" alt="" onClick={() => setSelectionCount(2)} />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="controls">
                    <button className="toggleBtn" onClick={() => controlsClicked(-1)} title="Go back">&#x2039;</button>
                    <button className="toggleBtn" onClick={() => controlsClicked(1)} title="Go forward">&#x203A;</button>
                </div>
                {/**Home Page Main Portion ends here */}
            </div>
        </>


    );
};

export default HomePage;