
const packs = [
    { field: 'packDetailID', title: 'Id' },
    { field: 'packTitle', title: 'Title'}, 
    { field: 'packDescription', title: 'Description' },
    { field: 'packDuration', title: 'Duration' },
    { field: 'packPrice', title: 'Price' },
    { field: 'packExDate', title: 'ExDate' },
    { field: 'packDiscount', title: 'Discount' },
    { field: 'image', title: 'imageURL ',  render: (rowData) => <img src={rowData.image} style={{ width: 100, borderRadius: "10%" }} />, },    
  
  ];

  export default packs;