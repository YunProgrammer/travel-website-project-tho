import Sidebar from "../../Components/Sidebar/index";
import Navbar from "../../Components/Navbar/index";
import "./style.scss";
import Widget from "../../Components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";



const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />        
        <div className="widgets">
          <Widget type="livingroom" />
          <Widget type="bathroom" />
          {/* <Widget type="kitchen" />
          <Widget type="diningroom" /> */}
        </div>
        <div className="widgets">
          {/* <Widget type="livingroom" />
          <Widget type="bathroom" /> */}
          <Widget type="kitchen" />
          <Widget type="diningroom" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart  />
        </div>         */}
      </div>


   
    </div>
  );
};

export default AdminPage;
