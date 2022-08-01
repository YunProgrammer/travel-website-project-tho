const config = require('./dbconfig'); // access database configuration 
const sql = require('mssql'); 

const getContacts = async() => { 
    try { 
        let pool = await sql.connect(config); // Log on to database 
        let theseContacts = await pool.request().query( 
            "SELECT * FROM Contacts" ); 
        return theseContacts.recordset; 
    } // end try block 
    catch(error) { 
        console.log("DATABASE CONNECTION EROR IN getThisContact Error Posted Next Line"); 
        console.log(error); 
    } // end catch 
} // end getContacts 

const getThisContact = async(contactId) => { 
    try { 
        let pool = await sql.connect(config); // Log on to database 
        let theseContacts = await pool.request()
        .input('input_parameter', sql.Int, contactId)
        .query( "SELECT * FROM Contacts where contactId = @input_parameter" ); 
        return theseContacts.recordsets; 
    } // end try block 
    catch(error) { 
        console.log("DATABASE Query ERROR IN getThisContact Error Posted Next Line"); 
        console.log(error); 
    } // end catch 
} // end getThisContact

   

const addContact = async(contact) => {
    try{
        let pool = await sql.connect(config);
        let addedContact = await pool.request()
        .input('firstName', sql.VarChar,contact.firstName) 
        .input('lastName', sql.VarChar,contact.lastName) 
        .input('emailAddr', sql.VarChar,contact.emailAddr) 
        .input('street', sql.VarChar,contact.street) 
        .input('city', sql.VarChar,contact.city) 
        .input('stateProvince', sql.VarChar,contact.stateProvince ) 
        .input('countryCode', sql.VarChar,contact.countryCode ) 
        .input('Phone', sql.VarChar,contact.Phone )
        .input('messageHolder', sql.VarChar,contact.messageHolder) 
        .execute('InsertOrUpdateContact'); 
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
        .query('DELETE FROM Contacts where contactId = @input_parameter');
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}

    
module.exports = { getContacts, getThisContact, addContact,deleteById }
