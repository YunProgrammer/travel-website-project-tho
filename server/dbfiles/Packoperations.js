const config = require('./dbconfig'); 
const sql = require('mssql'); 

const getPackages = async() => { 
    try { 
        let pool = await sql.connect(config); 
        let thesePackages = await pool.request().query( 
            "SELECT * FROM PACKAGEDETAIL" ); 
        return thesePackages.recordset; 
    } 
    catch(error) { 
        console.log("DATABASE CONNECTION EROR IN Error Posted Next Line"); 
        console.log(error); 
    } 
}
const getPackagesDetail = async() => { 
    try { 
        let pool = await sql.connect(config); 
        let thesePackages = await pool.request().query( 
            "SELECT * FROM PACKAGEDETAIL" ); 
        return thesePackages.recordset; 
    } 
    catch(error) { 
        console.log("DATABASE CONNECTION EROR IN Error Posted Next Line"); 
        console.log(error); 
    } 
}  



const getThisPack = async(Id) => { 
    try { 
        let pool = await sql.connect(config); // Log on to database 
        let theseContacts = await pool.request()
        .input('input_parameter', sql.Int, Id)
        .query( "SELECT * FROM PACKAGEDETAIL where packDetailID = @input_parameter" ); 
        return theseContacts.recordsets; 
    } // end try block 
    catch(error) { 
        console.log("DATABASE Query ERROR IN getThisContact Error Posted Next Line"); 
        console.log(error); 
    } // end catch 
} // end getThisContact

   

const addPack = async(contact) => {
    try{
        let pool = await sql.connect(config);
        let addedContact = await pool.request()
        .input('packTitle', sql.VarChar,contact.packTitle) 
        .input('packDescription', sql.NVarChar,contact.packDescription) 
        .input('packDuration', sql.VarChar,contact.packDuration) 
        .input('packPrice', sql.VarChar,contact.packPrice) 
        .input('packExDate', sql.Date,contact.packExDate) 
        .input('packDiscount', sql.VarChar,contact.packDiscount ) 
        .input('image', sql.NVarChar,contact.image ) 
        
        .execute('addPack'); 
        return addedContact.recordsets; 
        } 
        catch(error) { 
            console.log("DATABASE Post ERROR IN addContact Error Posted Next Line"); 
            console.log(error); 
        } 
}   
const deleteById = async(Id)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, Id)
        .query('DELETE FROM PACKAGEDETAIL where packDetailID = @input_parameter');
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}
const updatePack = async(contact) =>{
    try {
        let pool = await sql.connect(config);
        let addedHouse = await pool.request()
        .input('packDetailID',sql.Int, contact.packDetailID)
        .input('packTitle', sql.VarChar,contact.packTitle) 
        .input('packDescription', sql.NVarChar,contact.packDescription) 
        .input('packDuration', sql.VarChar,contact.packDuration) 
        .input('packPrice', sql.VarChar,contact.packPrice) 
        .input('packExDate', sql.Date,contact.packExDate) 
        .input('packDiscount', sql.VarChar,contact.packDiscount ) 
        .input('image', sql.NVarChar,contact.image ) 
        .execute('updatePack');
        console.log(addedHouse.recordsets)
        return addedHouse.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN addhouse Error Posted Next Line');
        console.log(e);
    }
}
module.exports = {getPackages, getPackagesDetail,addPack
    , updatePack,getThisPack, deleteById}