import "./style.scss"
import Sidebar from "../../Components/Sidebar/index"
import Navbar from "../../Components/Navbar/index"


import PackageTable from "../../Components/Table/PackageTable"
import packs from "../../data/columnPackage"

const PackageList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="datatable">
           <PackageTable columns={packs}/>
        </div>       
      </div>
    </div>
  )
}

export default PackageList