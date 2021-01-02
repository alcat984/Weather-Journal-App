/*  Define the object variable as an empty 
  array to store incoming data */

  let projectData = {};

  /* Express to run server and routes */ 
  
  const express = require('express');
  
    
  // Start up an instance of app /
  
  const app = express();
  
  /* Dependencies */

  const bodyParser = require('body-parser'); 
  
  /* Middleware */

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  /* Cors for cross origin allowance */

  const cors = require('cors');
  app.use(cors());
  
  /* Initialize the main project folder */
  
  app.use(express.static('website'));
  
  /* Assign a port to the server */

  const port = 3000;
    
  /* Spin up the server */
  
  const server = app.listen(port, listening);
   function listening(){
      // console.log(server);
  
      console.log(`Server running on localhost: ${port}`);
    };
     