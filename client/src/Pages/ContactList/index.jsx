import "./style.scss"
import Sidebar from "../../Components/Sidebar/index"
import Navbar from "../../Components/Navbar/index"

import columns from "../../data/columnContact"
import ContactTable from "../../Components/Table/ContactTable"

const ContactList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="datatable">
           <ContactTable columns={columns}/>
        </div>       
      </div>
    </div>
  )
}

export default ContactList