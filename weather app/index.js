let formval = document.getElementById("pure-form");
let temperature = document.getElementById("temp");
let locate = document.getElementById("locate");
let description = document.getElementById("view");
async function getData(country){
   let promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=3720c9e847679c08fa0e5512f071ea04&units=metric`
   ) 
   return await promise.json(); 
}



formval.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let country = (document.getElementById("fname")).value;
    response = await getData(country);
    locate.innerText = response.name;
    temperature.innerText = response.main.temp + "°C";
    description.innerHTML = response.weather[0].description;
})
