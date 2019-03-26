searchButton.addEventListener("click",function(){
  loading.style.display = "block";
  var inputValue = cityName.value.trim();
  if(inputValue.length == 0){
    alert("Please Enter City Name");
  }else {
    var request = new XMLHttpRequest();
    var methode = "GET";
    var apiKey = "27e6ddab95eb2cc6db4da5ba8534eebc";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+inputValue+
    "&units=metrics&appid="+apiKey;
    request.open(methode,url);
    request.onreadystatechange = function(){
      if(request.readyState === 4 && request.status === 200){
        var data = JSON.parse(request.responseText);
        console.log(data);
        var wheatherObject = new Weather(inputValue,data.weather[0].description);
        wheatherObject.Temparature = data.main.temp;
        var differentColor = (Math.random()*10).toFixed();
        showData(wheatherObject,differentColor);
      } else if (request.readyState === 4 && request.status !== 200) {
        alert("Something Went Wrong Check City Name");
        weatherDiv.style.display = "none";
        loading.style.display = "none";
      }
    }
    request.send();
  }
})

function showData(data,colorCode){
  if (colorCode ==="2"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#2e2eda";
    loading.style.display = "none";
  }
  if (colorCode ==="1"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#2bbf36";
    loading.style.display = "none";
  }
  if (colorCode ==="3"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#94bf2b";
    loading.style.display = "none";
  }
  if (colorCode ==="4"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#bf9f2b";
    loading.style.display = "none";
  }
  if (colorCode ==="5"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#984eb7";
    loading.style.display = "none";
  }
  if (colorCode ==="6"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#cc6943";
    loading.style.display = "none";
  }
  if (colorCode ==="7"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#43ccac";
    loading.style.display = "none";
  }
  if (colorCode ==="8"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#43b9cc";
    loading.style.display = "none";
  }
  if (colorCode ==="9"){
    weatherDiv.style.display = "block";
    weatherDiv.style.backgroundColor = "#822052";
    loading.style.display = "none";
  }

  loading.style.display = "none";
  weatherDiv.style.display = "block";
  var cityTitle = data.cityname;
  city.textContent = cityTitle.charAt(0).toUpperCase()+cityTitle.substr(1).toLowerCase();
  description.textContent = data.description.toUpperCase();
  temperature.textContent = data._temp;
}
