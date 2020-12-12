/** Define the object variable as an empty 
  array to store incoming data */

  let projectData = {};

  /**Require the express to run the server*/ 
  const express = require('express');
  
  // const dotenv = require('dotenv');   
  // dotenv.config(); 
  
  // const API_KEY = process.env.API_KEY;
  
  
  
  /**Start up an instance of app */
  const app = express();
  
  /**Dependencies */
  const bodyParser = require('body-parser'); 
  
  /**Middleware */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  const cors = require('cors');
  app.use(cors());
  
  /**Initialize the main project folder */
  app.use(express.static('website'));
  
  /**Assign a port to the server */
  const port = process.env.PORT || 3000;
  
  
  /* Spin up the server*/
  const server = app.listen(port, listening);
   function listening(){
      // console.log(server);
  
      console.log(`Server running on localhost: ${port}`);
    };
  
  /**Get route */
  
  app.get('/all', function(req, res) {
            res.send(projectData);
  })    
    
  
  /**TODO route */
  
  app.post('/addWeather', function(req, res) {
            console.log(req.body)
            newEntry = {
              name: req.body.name,
              icon: req.body.icon,
              temp_min: req.body.temp_min,
              description: req.body.description
            }
            projectData = newEntry;
            res.send(projectData);
            console.log({message: "Post Recieved"})
  });
