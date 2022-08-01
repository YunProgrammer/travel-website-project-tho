const express = require('express'); 
const router = express.Router(); 
const Packoperations = require('../dbfiles/Packoperations')
const dbContact = require('../dbfiles/dbContact'); 

   router.route('/contact').get((request, response)=> { 
     dbContact.getContacts().then(result => { 
       console.log(result); 
       response.json(result); 
      }) 
    })
    router.route('/packages').get((request, response)=> { 
      Packoperations.getPackages().then(result=>{
        console.log(result);
        response.json(result);
      })
     })
    
     router.route('/packId/:id').get((request, response)=> { 
      Packoperations.getThisPack(request.params.id).then(result=>{
        console.log(result);
        response.json(result);
      })
     })
    
    // router.route('/contacts/:contactId').get((request, response)=> { 
    //   dboperations.getThisContact(request.params.contactId).then(result => { 
    //     response.send(result); 
    //     console.log(result); 
    //     //response.json(result); 
    //   }) 
    // })
    router.route('/addPack').post((request, response) =>{
      let pack = request.body
      Packoperations.addPack(pack).then(result =>{
        response.status(201).json(result);
        
      })
    })
      router.route('/addContact').post((request, response) =>{
        let contact = request.body
        dbContact.addContact(contact).then(result =>{
          response.status(201).json(result);
          console.log(response.body);
        })
      })

      router.route('/delete/:contactId').delete((request, response)=>{
  
        dbContact.deleteById(request.params.contactId).then(result =>{   
            response.json(result);
        })
    })
    router.route('/deletePack/:Id').delete((request, response)=>{
  
      Packoperations.deleteById(request.params.Id).then(result =>{   
          response.json(result);
      })
  })

  router.route('/updatePack').put((request, response) =>{
    let pack = request.body
   
    Packoperations.updatePack(pack).then(result =>{
        
        response.status(201).json(result);
    })
} )
module.exports = router;
