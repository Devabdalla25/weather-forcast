const apikey="8fb3b2fc70e37a6c1f78ff29875d6ef8";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityname=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");

const searchBox= document.querySelector(".search input");
const searchbtn=document.querySelector(".search  button");
const weatherIcon= document.querySelector('.weather-icon');
const weatherdisplay= document.querySelector('.weather');




const checkweather= async(city)=>{
    
    const response=await fetch(url +city+`&appid=${apikey}`) ;

    const data= await response.json();
    cityname.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp ) +"°C";
    humidity.innerHTML =data.main.humidity +"%";
    wind.innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main==="clouds"){
        weatherIcon.src= "./im/clouds.png";
    }
    else if(data.weather[0].main==="rain"){
        weatherIcon.src="./im/ain.png";
    }
    else if(data.weather[0].main==="clear"){
        weatherIcon.src="./im/clear.png";
    }
    else if(data.weather[0].main==="humidity"){
        weatherIcon.src="./im/humidity.png";
    }
    weatherdisplay.style.display="block"

    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
    searchBox.value='';
})


