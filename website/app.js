/* Global Variables for OpenWeather API request*/

// Create a new date instance dynamically with JS
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const countryCode = ',ita&';
const unitOfMeasurement = 'units=metric';
const API_KEY = `&appid=79d40003135e0c3584fe885d1ec08b98`;

const currentWeather = document.getElementById('zip');

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    let url;

    if(zip) {
        url = baseURL + currentWeather.value + countryCode + unitOfMeasurement + API_KEY;
        }else{
            console.log({ message: 'Bad url call!'})
        }
        getWeatherData(url)
        .then(function (projectData){
            return projectData;
        })
}

//Here we can add the Async function to GET request from OpenWeatherApi

const getWeatherData = async (url) => {

    const response = await fetch(url)
    try {
              const data = await response.json();
              console.log(data)
              //Add data to post request
              postData ('/addWeather', {name: data['name'], icon: data['weather'][0]['icon'], temp_min: data['main']['temp_min'].toFixed(), 
                            description: data['weather'][0]['description']
                  }).then (updateUI())
                  return data;
                  } catch(error) {
                              console.log({message: "Cannot fetch url from server correctly!"});
                  }
}

const postData = async (url="", data = {}) => {
    console.log(data);
    const response = await fetch(url, {
         method: 'POST',
         credentials: 'same-origin',
         headers: {
                   'Content-Type': 'application/json',
                  //  'Accept': 'application/json'
         },
         body: JSON.stringify(data) //Body data-type matches the 'Content-Type' header   
    })
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
              console.log({message: 'Bad response recieved!'});
              
    }
};


const updateUI = async () => {
    const response = await fetch('/all');
    try {
              const allData = await response.json();
              const name = document.querySelector('.name');
              const icon = document.querySelector('.icon');
              const temp = document.querySelector('.temp');
              const description = document.querySelector('.description');
              const date = document.querySelector('.date');
              
              name.textContent = allData.name;
              icon.textContent = allData.icon;
              temp.textContent = allData.temp_min;
              description.textContent = allData.description;
              date.textContent = allData.date = new Date().toDateString();
             
    } catch (error) {
              console.log({message: 'Invalid zipcode input!'}); 
    }
};