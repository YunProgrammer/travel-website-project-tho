
import React, { createRef, useEffect, useRef, useState } from "react";
import tableIcons from "./tableIcons";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Typography } from "@mui/material";
import MaterialTable from "@material-table/core";
import PackageApi from "../../api/packageApi";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PackageTable({ columns }) {

    const [selectedRow, setSelectedRow] = useState(null);

    const [pack, setPackage] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const [severity, setSeverity] = useState('');
    const packRef = useRef();
    packRef.current = pack;

    const [open, setOpen] = useState(false);
    const vertical = 'bottom'
    const horizontal = 'right';
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        retrievepack();
    }, []);

    const retrievepack = () => {
        PackageApi.getAll()
            .then(response => {
                setPackage(response.data);
                console.log(pack)
            })
            .catch(e => {
                console.log(e);
            });
    };

    //function for updating the existing row details
    const handleRowUpdate = (newData, oldData, resolve) => {
        //validating the data inputs
        let errorList = []
        if (newData.packDetailID === "") {
            errorList.push("Try Again, You can't fix the packID field")
            setSeverity('warning')
        }
        // if (newData.listingPhoto === "") {
        //   errorList.push("Try Again, You didn't enter the listingPhoto field")
        //   setSeverity('warning')
        // }
        // if (newData.location === "") {
        //   errorList.push("Try Again, location field can't be blank")
        //   setSeverity('warning')
        // }
        // if (newData.type === "") {
        //   errorList.push("Try Again, Enter type before submitting")
        //   setSeverity('warning')
        // }
        // if (newData.price === "") {
        //   errorList.push("Try Again, Enter price before submitting")
        //   setSeverity('warning')
        // }

        if (errorList.length < 1) {

            PackageApi.update(newData)
                .then(response => {
                    const updateHouse = [...pack];
                    const index = oldData.tableData.id;
                    updateHouse[index] = newData;
                    setPackage([...updateHouse]);
                    resolve()
                    setOpen(true)
                    setErrorMessages("Update success")
                    setSeverity('success')
                    console.log(errorList)
                })
                .catch(error => {
                    setErrorMessages(["Update failed! Server error"])
                    setOpen(true)
                    setSeverity('error')
                    resolve()

                })
        } else {
            setErrorMessages(errorList)
            setSeverity('warning')
            setOpen(true)
            resolve()

        }

    }
    const handleRowDelete = (oldData, resolve) => {
        PackageApi.remove(oldData.packDetailID)
            .then(response => {
                const dataDelete = [...pack];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setPackage([...dataDelete]);
                resolve()
                setErrorMessages(["Delete success! "])
                setOpen(true)
                setSeverity('success')
            })
            .catch(error => {
                setErrorMessages(["Delete failed! Server error"])
                setOpen(true)
                resolve()
            })
    }
    //function for adding a new row to the table
    const handleRowAdd = (newData, resolve) => {
        //validating the data inputs
        let errorList = []
        if (newData.packTitle === "") {
            errorList.push("Try Again, You didn't enter the packTitle field")
        }
        if (newData.packDuration === "") {
            errorList.push("Try Again, You didn't enter the packDuration field")
        }
        // if (newData.email === "" || validateEmail(newData.email) === false) {
        //     errorList.push("Oops!!! Please enter a valid email")
        // }
        // if (newData.phone === "") {
        //     errorList.push("Try Again, Phone number field can't be blank")
        // }
        // if (newData.website === "") {
        //     errorList.push("Try Again, Enter website url before submitting")
        // }

        if (errorList.length < 1) {
            PackageApi.create(newData)
                .then(res => {
                    let newUserdata = [...pack];
                    newUserdata.push(newData);
                    setPackage(newUserdata);
                    resolve()
                    setErrorMessages('Create success')
                    setOpen(true)
                    setSeverity('success')
                })
                .catch(error => {
                    setErrorMessages(["Create failed! Server error"])
                    setOpen(true)
                })
        } else {
            setErrorMessages(errorList)
            setOpen(true)
            resolve()
        }

        
    }
    return (
        <>
            <MaterialTable
                title="Package Table"
                columns={columns}
                data={pack}
                icons={tableIcons}
                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.pack_ID))}
               
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);

                        }),
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve)
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            handleRowDelete(oldData, resolve)
                        }),
                }}
                options={{
                    actionsColumnIndex: -1,
                    cellStyle: {
                        width: 200,
                        maxWidth: 200,
                        // height:10,
                    },
                    headerStyle: {
                        fontSize: '1rem',
                        width: 200,
                        maxWidth: 200,
                        fontWeight: 'bold',
                        backgroundColor: '#D3D3D3',
                        // whiteSpace: 'nowrap',
                        color: '#c76000'
                    },
                    rowStyle: rowData => ({
                        padding: 0,
                        margin: 0,
                        fontSize: 15,
                        height: 10,
                        color: 'black',
                        // whiteSpace: 'nowrap',            
                        backgroundColor: (selectedRow === rowData.tableData.pack_ID) ? '#EEE' : '#FFF'
                    })
                }}

            // detailPanel={[
            //     {
            //         tooltip: 'Show detail',
            //         render: rowData => {
            //             return (
            //                 <div
            //                     style={{

            //                         fontSize: '1.5rem',
            //                         fontWeight: 'bold',
            //                         textAlign: 'flex',
            //                         color: 'green',
            //                         backgroundColor: '#D3D3D3',
            //                     }}>
            //                     <Typography variant="h6">Email:</Typography>
            //                     <Typography variant="p" style={{color:'black'}}>
            //                         {rowData.email}
            //                     </Typography>
            //                     <Typography variant="h6">Message:</Typography>
            //                     <Typography variant="p" style={{color:'black'}}>
            //                         {rowData.message}
            //                     </Typography>
            //                 </div>

            //             )
            //         }
            //     }
            // ]}
            />
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}

                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {errorMessages}
                </Alert>
            </Snackbar>
        </>
    )

};

export default PackageTable;