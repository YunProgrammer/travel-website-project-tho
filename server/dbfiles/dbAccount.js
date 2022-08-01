const config = require('./dbconfig');
const sql = require('mssql');
const bcrypt = require('bcrypt');

const getAllAccount = async () => {
    try {
        let pool = await sql.connect(config);
        let theseAccount = await pool.request().query(
            'select * from Account'
        );
        console.log(theseAccount.recordset);

        return theseAccount.recordset;
    } catch (e) {
        console.log('Database connection errorr in get all house, error posted next line. ');
        console.log(e);
    }
}
const getByUserName = async (account) => {
    try {
        const userName = account.userName;
        let pool = await sql.connect(config);
        let theseAccount = await pool.request()
            .input('userName', sql.NVarChar, userName)        
            .query('select * from Account where userName = @userName');
        
        console.log(theseAccount.recordset);

        return theseAccount.recordset;
    } catch (e) {
        console.log('Database connection errorr in getByUserName, error posted next line. ');
        console.log(e);
    }
}
const addAccount = async (account) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(account.passwordHash, salt);
        const userName = account.userName;
        const email = account.email;

        let pool = await sql.connect(config);      
        let addedAccount = await pool.request()
            .input('userName', sql.NVarChar, userName)
            .input('email', sql.NVarChar, email)
            .input('passwordHash', sql.NVarChar, password)
            .input('role',sql.NVarChar,account.role)
            .execute('createAccount');
        
        return addedAccount.recordsets;

    } catch (e) {
        console.log('DATABASE Post ERROR IN addAccount Error Posted Next Line');
        console.log(e);
    }
}

const logIn = async (account) => {
    try {
        const password = account.passwordHash;
        const userName = account.userName;
        const email = account.email;
        let pool = await sql.connect(config);
        let mess = "--";
        
        let addedAccount = await pool.request()
            .input('userName', sql.NVarChar, userName)        
            .query('select * from Account where userName = @userName');

        if (addedAccount.recordset.length <= 0) {
            mess = "User does not exist"
            console.log(mess);
            return 1;
        } else {            
            const hash = addedAccount.recordset[0].passwordHash;            
           const match = await bcrypt.compare(password, hash);
           if(match){
               return addedAccount.recordset
            //    return 2;

           }else{
               return 3;
           }
        }       
    } catch (e) {
        console.log('DATABASE Post ERROR IN login Error Posted Next Line');
        console.log(e);
    }
}

const updateAccount = async (account) => {
    try {
        let pool = await sql.connect(config);
        let addedAccount = await pool.request()
            .input('userName', sql.NVarChar, account.userName)
            .input('email', sql.NVarChar, account.email)
            .input('passwordHash', sql.NVarChar, account.passwordHash)
            .input('role',sql.NVarChar,account.role)
            .execute('UpdateAccount');
        console.log(addedAccount.recordsets)
        return addedAccount.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN addedAccount Error Posted Next Line');
        console.log(e);
    }
}
const deleteAccount = async(Id)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, Id)
        .query('DELETE FROM Account where userID = @input_parameter');
        console.dir(houseId)
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}
module.exports = {
    addAccount,
    updateAccount,
    logIn,
    getAllAccount,
    getByUserName,
    deleteAccount
}